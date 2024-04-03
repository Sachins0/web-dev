const Tag=require("../models/Tag")

exports.createTag=async(req,res)=>{
    try {
        //fetch data
        const {name,description}=req.body
        //validation
        if(!name || !description){
            return res.status(500).json({
                success:false,
                message:"All fields are required"
            })
        }
        //create entry in Db
        const tagDetails=await Tag.create({
            name:name,
            description:description,
        })
        console.log(tagDetails);
        //return res
        return res.status(200).json({
            success:true,
            message:"tag created successfully"
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//get All Tags handler fn

exports.showAllTags=async(req,res)=>{
    try {
        const allTags=await Tag.find({},{name:true, description:true})
        return res.status(200).json({
            success:true,
            message:"All tags returned successfully",
            allTags
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}