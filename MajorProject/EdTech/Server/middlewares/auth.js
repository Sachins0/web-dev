const jwt=require("jsonwebtoken")
require("dotenv").config()
const User=require("../models/User")

//auth
exports.auth=async(req,res,next)=>{
    try {
        //extract token
        const token=req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ","")

        //if token missing
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token is missing"
            })
        }

        //verify token
        try{
            const decode=jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode);
            req.user=decode
        }catch(error){
            return res.status(401).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next()
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Something went wrong while validating token"
        })
    }
}

//isStudent
exports.isStudent=async(req,res,next)=>{
    try {
        if(req.user.accountType!="Student"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for students only"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified,try again"
        })
    }
}

//isInstructor
exports.isInstructor=async(req,res,next)=>{
    try {
        if(req.user.accountType!="Instructor"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Instructors only"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified,try again"
        })
    }
}

//isAdmin
exports.isAdmin=async(req,res,next)=>{
    try {
        if(req.user.accountType!="Admin"){
            return res.status(401).json({
                success:false,
                message:"This is protected route for Admins only"
            })
        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"user role cannot be verified,try again"
        })
    }
}