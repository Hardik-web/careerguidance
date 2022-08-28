const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate')

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.end('hii auth.js');
});
// using promises
// router.post('/register', (req,res)=>{

//     const {name,email,phone,password,cpassword}=req.body;

//     if( !name || !email || !phone || !password || !cpassword){
//         return res.status(422).json({error:"pls fill"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Email already exist"});
//     }

//     const user = new User({name,email,phone,password,cpassword});

//     user.save().then(()=>{

//         res.status(201).json({message:"user registration success"});
//     }).catch(()=>res.status(501).json({error:"failed"}));

//     }).catch(err =>{console.log(err);});


// });

// Async-await
router.post('/register', async (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "pls fill" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        }else if(password != cpassword){
            return res.status(422).json({ error: "password not matching" });
        }else{
            const user = new User({ name, email, phone, password, cpassword });
        
            await user.save();
            
             res.status(201).json({ message: "user registration success" });
     }

    
    } catch (err) {
        console.log(err);
    }




});

// login code

router.post('/login', async (req,res)=>{
    
    try{
        let token;
      const {email,password} = req.body;
      if(!email || !password){
          return res.status(400).json({error:"invalid credentials"})
      }
      const userLogin =  await User.findOne({email:email});
    //    console.log(userLogin);
    if (userLogin){
        const isMatch = await bcryptjs.compare(password,userLogin.password);

        token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken",token,{
            expires: new Date(Date.now()+25892000000),
            httpOnly:true
        });

        if(!isMatch){
         res.status(400).json({error:'Invalid Credentials'})
        }else{
         res.json({message:'user signin successfully'})
        }
        
    }else{
        res.status(400).json({error:'Invalid Credentials'}) 
    }

     

    }catch(err){
        console.log(err);
    }
});


// about page
router.get('/about', authenticate ,(req,res)=>{
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
})

// contact page
router.post('/contact',authenticate,async (req,res)=>{
  try{
    
    const {name,email,phone,message}=req.body;

    if(!name || !email || !phone || !message){
      return res.json({error:"plz fill the contact form"});
    }

    const userContact =await  User.findOne({_id:req.userID});

    if(userContact){

        const userMessage = await userContact.addMessage(name,email,phone,message);

        await userContact.save();
        res.status(201).json({message:"user Contact success"});
    }

  }catch(error){
  console.log(error)
  }
});

// logout page
router.get('/logout', (req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logout");
});
module.exports = router;