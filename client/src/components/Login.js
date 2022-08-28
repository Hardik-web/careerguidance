import React,{useState,useContext} from 'react';
import logo from '../images/login.jpg';
import { NavLink ,useHistory} from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {

   const {state,dispatch} = useContext(UserContext)

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const loginUser= async (e)=>{
    e.preventDefault();

    const res = await fetch('/login',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
             email, password
            
        })
    });
    
    const data = res.json();

    if(res.status===400 || !data ){
        window.alert("Invalid Credentials");

    }else{
        dispatch({type:'USER',payload:true});
        window.alert("Successful login");
        history.push("/");
    }

    }
    return (
        <form method="POST" className="container">
            <div className="form">
                <div className="heading">
                    <h1>Login</h1>
                </div>
                <div className="wrap2">
                    
                        <label>E-mail</label>
                        <input type="text" name="email" value={email} onChange={(e)=>{
                            setEmail(e.target.value)
                        }} id="email" />
                        <span className="focus-input"></span>
               
                </div>
                <div className="wrap2">
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={(e)=>{
                            setPassword(e.target.value)
                        }} id="password" />
                        <span className="focus-input"></span>
                   
                </div>
                <button type="submit" onClick={loginUser} className="button">Login</button>
            </div>
            <div class="image">
                <img src={logo} alt="Login" class="img" />
                <NavLink className="nav-link" to="/signup">Sign up here</NavLink>
            </div>


        </form >
    )
}

export default Login
