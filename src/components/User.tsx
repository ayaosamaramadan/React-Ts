import { useState } from "react";

type userProp = {
    name:string;
    email:string;
}

function User() {
    // const [user, setUser] = useState<null | {name:string; email:string}>(null);
    const [user, setUser] = useState<null |userProp>(null);
  return (
    <>
    <div>
    <h1>Username is { user?.name}</h1>
    <h2>Username is {user?.email}</h2>
        <button  onClick={()=>setUser({name:"aya" ,email:"ayaramadan2011@gmail.com"})} className="bg-amber-700 ml-5">
            Login
        </button>
        <button onClick={()=>setUser(null)} className="bg-amber-700 ml-5">
            Logout  
        </button>

    </div>
    </>
  );
}

export default User;