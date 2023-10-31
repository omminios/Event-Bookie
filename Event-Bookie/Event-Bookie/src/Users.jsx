
import PropTypes from 'prop-types'

function Users(props){

    return(
        <>
        
        </>

    );
}

Users.protoType = {
    name: PropTypes.string,
    age: PropTypes.number,
    isHost: PropTypes.bool,
}

Users.defaultProps ={
    name: "Guest",
    age: 0,
    isHost: false,
}
export default Users