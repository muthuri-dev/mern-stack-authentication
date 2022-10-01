
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate();
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
        const newlogin=({
            email:email,
            pass:pass,
        });
        axios.post('http://localhost:8081/login',newlogin)
        .then((respond)=>{
            if(respond.status===200){
                //alert('Login in successful');
               // navigate.replace('/home');
               //navigate('/home',{replce:true});
               navigate("/home")
            }else{
                alert('Check your entities');
                console.log(respond);
            }
        });
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