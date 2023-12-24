import json
import boto3
from botocore.exceptions import ClientError
import logging

# Initialize a DynamoDB client
dynamodb = boto3.client('dynamodb')
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def handler(event, context):
    try:
        logger.info('Received event: %s', json.dumps(event))

        # Extract genre from query string parameters
        genre = event.get('queryStringParameters', {}).get('genre')
        logger.info('genre match: %s', genre)

        # Fetch event data from DynamoDB with optional genre filtering
        if genre:
            response = dynamodb.scan(
                TableName='localEvents-devv',
                FilterExpression='EventGenre = :genre',
                ExpressionAttributeValues={':genre': {'S': genre}}
            )
        else:
            response = dynamodb.scan(
                TableName='localEvents-devv'
            )

        # Process the response and extract event data
        events = response.get('Items', [])

        # Prepare a response
        event_list = []

        for event_item in events:
            event = {
                'EventID': event_item['EventID']['S'],
                'EventTitle': event_item['EventTitle']['S'],
                'EventDate': event_item['EventDate']['S'],
                'EventStart': event_item['EventStart']['S'],
                'EventEnd': event_item['EventEnd']['S'],
                'EventLocation': event_item['EventLocation']['S'],
                'EventGenre': event_item['EventGenre']['S'],
                'EventDescription': event_item['EventDescription']['S'],
                'EventImageUrl': event_item['EventImageUrl']['S'],
                # Add more event details here
            }
            event_list.append(event)
            
        print("Event List:", event_list)

        headers = {
            'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods': 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Expose-Headers': 'Date,X-Amzn-ErrorType',
        }

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps(event_list)
        }

    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }
