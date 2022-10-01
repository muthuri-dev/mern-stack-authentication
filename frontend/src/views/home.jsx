//import { useEffect } from "react";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate();
     const token=localStorage.getItem('token');
     const { decodedToken, isExpired } = useJwt(token);
    if(decodedToken){
        console.log('correct')
    }else if(isExpired){
        navigate('/login');
    }
    return (  
        <div className="home">
            <h2>Welcome</h2>
        </div>
    );
}
 
export default Home;