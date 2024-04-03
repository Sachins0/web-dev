const Category=require("../models/Category")

exports.createCategory=async(req,res)=>{
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
        const categoryDetails=await Category.create({
            name:name,
            description:description,
        })
        console.log(categoryDetails);
        //return res
        return res.status(200).json({
            success:true,
            message:"category created successfully"
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

//get All Categories handler fn

exports.showAllCategories=async(req,res)=>{
    try {
        const allCategories=await Category.find({},{name:true, description:true})
        return res.status(200).json({
            success:true,
            message:"All Categories returned successfully",
            allCategories
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}