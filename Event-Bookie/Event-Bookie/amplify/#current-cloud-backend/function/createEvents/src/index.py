import json
import boto3
from datetime import datetime
import logging
import uuid
import base64
import io

logger = logging.getLogger()
logger.setLevel(logging.INFO)

# Initialize a DynamoDB client
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

# Initialize an S3 client
s3 = boto3.client('s3', region_name='us-east-1')
bucket_name = 'eventbookie'  # Replace with your S3 bucket name

# Specify your DynamoDB table name
table_name = 'localEvents-devv'

def add_event(event_details, event_date_iso, start_time_iso, end_time_iso, image_url):
    table = dynamodb.Table(table_name)
    event_id = str(uuid.uuid4())
    
    try:
        response = table.put_item(
            Item={
                'EventID': event_id,
                'EventTitle': event_details['eventTitle'],
                'EventDate': event_details['eventDate'],
                'EventStart': event_details['eventStart'],
                'EventEnd': event_details['eventEnd'],
                'EventLocation': event_details['eventLocation'],
                'EventGenre': event_details['eventGenre'],
                'EventDescription': event_details['eventDescription'],
                'EventImageUrl': image_url,
            }
        )
        return response
    except Exception as e:
        logger.error(f'Error adding event to DynamoDB: {str(e)}')
        raise

def handler(event, context):
    logger.info('Lambda function invoked with event: %s', json.dumps(event))

    headers = {
        'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
        'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Date,X-Amzn-ErrorType',
    }

    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps('Preflight request successful'),
        }

    try:
        # Validate event data
        if 'body' not in event or not event['body']:
            raise ValueError('Invalid event data')

        # Parse JSON data from the body
        body = json.loads(event['body'])
        
        # Extract image name and data separately
        image_name = body.get('eventImageName', '')
        image_data = body.get('eventImageData', '')

        # Handle base64-encoded image data
        if image_name and image_data:
            image_data_decoded = base64.b64decode(image_data)
            s3.upload_fileobj(io.BytesIO(image_data_decoded), bucket_name, f'event_images/{image_name}')

        # Remove image data from the form data
        body.pop('eventImageName', None)
        body.pop('eventImageData', None)

        # Format date and time strings to ISO 8601 standard
        event_date_iso = datetime.strptime(body['eventDate'], '%Y-%m-%d').isoformat()
        start_time_iso = datetime.strptime(body['eventStart'], '%H:%M:%S').isoformat()
        end_time_iso = datetime.strptime(body['eventEnd'], '%H:%M:%S').isoformat()

        # Add event to DynamoDB
        response = add_event(body, event_date_iso, start_time_iso, end_time_iso, image_name)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps('Event added successfully'),
        }
    except ValueError as ve:
        return {
            'statusCode': 400,
            'headers': headers,
            'body': json.dumps(f'Bad Request: {str(ve)}'),
        }
    except Exception as e:
        logger.error(f'Error processing request: {str(e)}')
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps(f'Internal Server Error: {str(e)}'),
        }
