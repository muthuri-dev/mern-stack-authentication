
import { useState } from "react";
const Login = () => {
    const[email, setEmail]=useState('');
    const[pass, setPass]=useState('');

    const handleEmail= function(e){
        setEmail(e.target.value);
    }
    const handlePass= function(e){
        setPass(e.target.value);
    }

    const handleSubmit= function(e){
        e.preventDefault();
        console.log({email,pass});
    }
    return ( 
        <div className="container">
            <h3>Login</h3>
            <form onSubmit={handleSubmit}>
                <input required type="email" placeholder="Email address" autoComplete="off"value={email} onChange={handleEmail}/>
                <input required type="password" placeholder="*****" value={pass} onChange={handlePass}/>
                <button>Login</button>
            </form>
        </div>
     );
}
 
export default Login;