
const User=require("../models/User")
const mailSender=require("../utils/mailSender")
const bcrypt=require("bcrypt")


//resetPasswordToken
exports.resetPasswordToken=async(req,res)=>{
    try {
        //get email
        const email=req.body.email
        //check user for email,email validation
        const user=await User.findOne({email:email})
        if(!user){
            return res.json({
                success:false,
                message:"Your Email is not registered with us"
            })
        }
        //generate token
        const token=crypto.randomUUID()
        //update user by adding token and expiration time
        const updatedDetails=await User.findOneAndUpdate(
            {email:email},
            {
                token:token,
                resetPasswordExpires:Date.now()+5*60*1000
            },
            {new:true}
            //new:true->it returns updated values
        )
        //create URL
        const url=`http://localhost:3000/update-password/${token}`
        //send email containing url
        await mailSender(
            email,
            "Password reset link",
            `Password reset link:${url}`
        )
        //return response
        return res.json({
            success:true,
            message:"Email sent successfully, please check email and change password"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while sending reset pwd email"
        })
    }

   
}

//resetPassword
exports.resetPassword=async(req,res)=>{
    try {
        //fetch data
        const {password,confirmPassword,token}=req.body
        //validation
        if(password!=confirmPassword){
            return res.json({
                success:false,
                message:"Confirm Password and Password is different"
            })
        }
        //get userdetails from Db using token
        const userDetails=await User.findOne({token:token})
        //token validation
        if(!userDetails){
            return res.json({
                success:false,
                message:"Token is Invalid"
            })
        }
    
        if(userDetails.resetPasswordExpires<Date.now()){
            return res.json({
                success:false,
                message:"Token is expired"
            })
        }
        //hash pwd
        const hashedPassword=await bcrypt.hash(password,10)
        //update pwd
        await User.findOneAndUpdate(
            {token:token},
            {password:hashedPassword},
            {new:true}
        )
        //return res
        return res.status(200).json({
            success:true,
            message:"Password reset successfully"
        })  
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Something went wrong while reset pwd"
        })
    }

}