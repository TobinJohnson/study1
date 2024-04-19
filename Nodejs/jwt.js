const express=require('express');
const app=express();
const path=require('path');
const jwt=require('jsonwebtoken');
const { decode } = require('punycode');
const { log } = require('console');
require('dotenv').config()
const user= {
    name: "John",
    password:123
}
app.use(express.urlencoded({ extended: true}))
function generateToken(username){
   return auth=jwt.sign({username},"welcome",{expiresIn:'1h'})

}

function authenicateToken(req,res,next){
    // console.log(process.env+"process");
    const token=req.headers['authorization']
    if(token){
        // console.log(process.env+"process");
        jwt.verify(token,"welcome",(err,decoded)=>{
        if(err){
            res.status(401).json({message:"Token is invalid"})
        }
        req.user=decoded
        next()
        })
    }
    else{
        res.status(401).json({message:"Token is not provided"})
    }

}
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/jwtSample.html'))
})
app.post('/home',(req,res)=>{
    const {name,password}=req.body
    // if(name===user.name && password===user.password){
        if(name){
        const token=generateToken(name)
        req.json(token)
    }
    else
    res.status(401).json({message:"Invalid Credentials"})
 })


 app.get('/home',authenicateToken,(req,res)=>{
res.sendFile(path.join(__dirname,'/home'))
 })
app.listen(3001,()=>{
    console.log("127.0.0.1:3001");
})