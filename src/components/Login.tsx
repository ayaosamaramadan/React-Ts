import { useState } from "react";

function Login(){
    
    const [setIslogin, setIsLoggedIn] = useState<boolean>();
    function handleLogin(){
        setIsLoggedIn(true);
        console.log(" is logged in");
    }
    function handleLogout(){
        setIsLoggedIn(false);
        console.log(" is logged out");
    }
    return (
        <div>
            <h2>User {setIslogin===true?"logged in":"logged out" }</h2>
            <button  onClick={handleLogin} className="bg-amber-700 ml-5">Login</button>
            <button  onClick={handleLogout} className="bg-amber-700 ml-5">Logout</button>
        </div>
    );
}

export default Login;