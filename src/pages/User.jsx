import { useParams } from "react-router-dom";

function User() {
    const {id} =  useParams() ; 
    return (
        <div>
            <h1>User Page:</h1>
            <p>user ID: {id}</p>
        </div>
    );   
}

export default User;