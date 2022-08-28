
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieparser = require("cookie-parser");

dotenv.config({path:'./config.env'});
require('./db/conn');

app.use(cookieparser());
app.use(express.json());
// const User = require('./model/userSchema');

// we link the router file
app.use(require('./router/auth'));

const PORT = process.env.PORT;



app.get('/quiz',(req,res)=>{
    res.send('quiz')
});
// app.get('/about',(req,res)=>{
//     res.send('about')
// });
// app.get('/contact',(req,res)=>{
//     res.send('contact')
// });
 app.get('/login',(req,res)=>{
     res.send('login')
});
app.get('/signup',(req,res)=>{
    res.send('signup')
});

app.listen(PORT,()=>{
    console.log("server is running ");
});