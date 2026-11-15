import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    function handleLogin() {
        navigate("/");
    }

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>LogIn</button>
        </div>
    );
}

export default Login;