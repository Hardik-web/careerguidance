import React,{useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom'


const Contact = () => {

    const history = useHistory();
    const  callContactPage = async ()=>{
      try{
       const res = await fetch('/about',{
           method:'GET',
           headers:{
               Accept:"application/json",
               "Content-Type":"application/json"
           },
           credentials:"include"
       });
       
       const data = await res.json();

       if(!res===200){
           const error = new Error(res.error);
           throw error;
       }

      }catch(err){
      console.log(err);
      history.push('/login')
          }
    }

useEffect(() => {
   callContactPage();
}, [])
       
      
       const[userData,setUserData] = useState({name:'',email:'',phone:'',message:''});

       const userContact = async ()=>{
           try{
               const res = await fetch('/getdata',{
                   method:"GET",
                   headers:{
                       "Content-Type":"application/json"
                   }
               });

               const data = await res.json();
               console.log(data);
               setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

               if(!res.status===200){
                   const error = new Error(res.error);
                   throw error;
               }
           }catch(err){
               console.log(err);
           }
       }

       useEffect(() => {
           
          userContact();
           
       }, [])

    //    storing data in states

     const handleInputs = (e)=>{
         const name = e.target.name;
         const value = e.target.value;

         setUserData({...userData,[name]:value });
     }

//    send data to backend
const contactForm = async (e)=>{
    e.preventDefault();

    const {name, email ,phone, message} = userData;
      const res =await fetch('/contact',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify({
            name,email,phone,message
           
       })
      });

      const data = await res.json();

      if(!data){
          console.log("message not send")
      }else{
          alert("Message send");
          setUserData({...userData, message:""});
      }
}



    return (
    
            <div className="container">
                <form method="POST" className="form">
                    <div className="heading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="wrap2">
                        <label>Name</label>
                        <input type="text"   name="name"   value={userData.name} onChange={handleInputs} id="contact_form_name" />
                        <span className="focus-input" ></span>

                    </div>
                    <div className="wrap2">

                        <label>E-mail</label>
                        <input type="text"  name="email" value={userData.email} onChange={handleInputs}id="contact_form_email" />
                        <span className="focus-input"></span>

                    </div>
                    <div className="wrap2">

                        <label>Phone</label>
                        <input type="number" name="phone"  value={userData.phone} onChange={handleInputs} id="contact_form_phone" />
                        <span className="focus-input"></span>

                    </div>
                    <div className="wrap3">

                        <label>Type your Text</label>
                        <textarea 
                         cols="77"rows="3" name="message" value={userData.message} onChange={handleInputs}></textarea>
                        <span className="focus-input"></span>

                    </div>

                    <button type="submit" onClick={contactForm} className="button">Send</button>
                </form>
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                            <i class="fas fa-map-marker"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>4772 Patel Camp Road,<br />Mumbai,Maharashtra,<br />400091</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>123-456-7890</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>careerbuilder@gmail.com</p>
                        </div>
                    </div>

               </div>  

            </div>

         
                )
}

                export default Contact
