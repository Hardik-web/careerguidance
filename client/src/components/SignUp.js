import React,{useState} from 'react';
import logo from '../images/signup.jpg';
import { NavLink, useHistory } from 'react-router-dom';


const SignUp = () => {

    const history = useHistory();

   const [user,setUser] = useState({
       name:"",email:"",phone:"",password:"",cpassword:""
   });
   let name,value;
   const handleInputs = (e) =>{
   console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});

   }

   const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,phone,password,cpassword} = user;

    const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name, email, phone, password, cpassword
            
        })
    });

    const data = await res.json();

    if(res.status===422 || !data ){
        window.alert("Invalid registration");
        console.log("Invalid registration");
    }else{
        window.alert("Successful registration");
        console.log("Successful registration");
        history.push("/login");
    }
   }





    return (
        <form method = "POST" className="container">
            <div className="form">
                <div className="heading">
                    <h1>Sign up</h1>
                </div>
                <div className="wrap">
                    <div className="f1">
                        <label>Name</label>
                        <input type="text"  name = "name" value={user.name}  onChange={handleInputs} id="name" />
                        <span className="focus-input"></span>
                    </div>
                    <div className="f2">
                        <label>E-mail</label>
                        <input type="text" name = "email" value={user.email} onChange={handleInputs}  id="email" />
                        <span className="focus-input"></span>
                    </div>
                </div>
                <div className="wrap2">
                    <label>Phone Number</label>
                    <input type="number" name = "phone"value={user.phone}  onChange={handleInputs}  id="phone" />
                    <span className="focus-input"></span>
                </div>
                <div className="wrap2">
                    <label>Password</label>
                    <input type="password" name = "password"value={user.password}  onChange={handleInputs} id="password" />
                    <span className="focus-input"></span>
                </div>
                <div className="wrap2">
                    <label>Confirm Password</label>
                    <input type="password" name = "cpassword" value={user.cpassword} onChange={handleInputs} id="cpassword" />
                    <span className="focus-input"></span>
                </div>
                <button type="submit" className="button" onClick={PostData}>Register</button>
            </div>
            <div class="image">
                <img src={logo} alt="Signin" class="img" />
                <NavLink className="nav-link" to="/login">Already register</NavLink>
            </div>


        </form>
    )
}

export default SignUp
