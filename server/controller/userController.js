const User=require('../models/userModel')
const jwt=require('jsonwebtoken')

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'1hr'})
}

const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.status(200).json({email,token,role:user.role})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}
const signupUser=async(req,res)=>{
    const{username,email,password,mobile,role}=req.body;
    console.log('Received Registration Request:', { username, email, password, mobile, role });
    try{
        const user=await User.signup(username,email,password,mobile,role)
        const token=createToken(user._id)
        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}

module.exports={loginUser,signupUser}