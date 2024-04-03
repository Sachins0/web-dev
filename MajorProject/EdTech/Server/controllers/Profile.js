const Profile=require("../models/Profile")
const User=require("../models/User")

exports.updateProfile=async(req,res)=>{
    try {
        //get data
        const {gender,contactNumber,dateOfBirth="",about=""}=req.body
        //get userId
        const id=req.user.id
        //validation
        if(!contactNumber || !gender || !id){
            return res.status(400).json({
                success:false,
                message:'Missing Properties'
            })
        }
        //find profile
        const userDetails=await User.findById(id)
        const profileId=userDetails.accountDetails
        const profileDetails=await Profile.findById(profileId)

        //update profile
        profileDetails.dateOfBirth=dateOfBirth
        profileDetails.contactNumber=contactNumber
        profileDetails.about=about
        profileDetails.gender=gender
        await profileDetails.save()
        //return res
        return res.status(200).json({
            success:true,
            message:'Profile updated successfully',
            profileDetails
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to update profile',
            error:error.message
        })
    }
}

//delete account
//*explore how can we schedule deletion opn (cron job)

exports.deleteAccount=async(req,res)=>{
    try {
        //get id
        const id=req.user.id
        //validation
        const userDetails=await User.findById(id)
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:'User not found'
            })
        }
        //delete Profile
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails})
        //*unenroll user from all enrolled courses
        //delete user
        await User.findByIdAndDelete({_id:id})

        //return res
        return res.status(200).json({
            success:true,
            message:'User Profile deleted successfully',
            profileDetails
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to delete User profile',
            error:error.message
        })
    }
}

exports.getAllUserDetails=async(req,res)=>{
    try {
        //get id
        const id=req.user.id

        //validation and get user details
        const userDetails=await User.findById(id).populate("additionalDetails").exec()
        //return res
        return res.status(200).json({
            success:true,
            message:'User data fetched successfully',
            profileDetails
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}