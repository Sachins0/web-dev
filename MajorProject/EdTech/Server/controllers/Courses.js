const Course=require("../models/Course")
const Category=require("../models/Category")
const User=require("../models/User")
const {uploadIamgeToCloudinary}=require("../utils/imageUploader")

//create Course handler fn
exports.createCourse=async(req,res)=>{
    try {
        //fetch data
        const {courseName,courseDescription,whatYouWillLearn,price,category}=req.body

        //get thumbnail
        const thumbnail=req.file.thumbnailImage

        //validation
        if(!courseName || !courseDescription || !whatYouWillLearn || !price || !category || !thumbnail){
            return res.status(400).json({
                success:false,
                message:'All fields are required'
            })
        }

        //check for instructor
        const userId=req.user.id
        const instructorDetails=await User.findById(userId)
        console.log("Instructor Details",instructorDetails);

        if(!instructorDetails){
            return res.status(404).json({
                success:false,
                message:'All Details not found'
            })
        }

        //check given category is valid or not
        const categoryDetails=await Category.findById(category)
        if(!categoryDetails){
            return res.status(404).json({
                success:false,
                message:'Category Details not found'
            })
        }

        //upload image on cloudinary
        const thumbnailImage=await uploadIamgeToCloudinary(thumbnail,process.env.FOLDER_NAME)

        //create an entry for new course
        const newCourse=await Course.create({
            courseName,
            courseDescription,
            instructor:instructorDetails._id,
            whatYouWillLearn:whatYouWillLearn,
            price,
            category:categoryDetails._id,
            thumbnail:thumbnailImage.secure_url,
        })

        //add new course to user schema of instructor
        await User.findByIdAndUpdate(
            {_id:instructorDetails._id},
            {
                $push:{
                    courses:newCourse._id,
                }
            },
            {new:true}
        )

        //*update category schema

        //return response
        return res.status(200).json({
            success:true,
            message:'Course created successfully',
            data:newCourse
        })
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Failed to create course',
            error:error.message
        })
    }
}

//getAll Course handler fn
exports.showAllCourses=async(req,res)=>{
    try {
        //*to change
        const allCourses=await Course.find({})

        return res.status(200).json({
            success:true,
            message:'Data for all courses fetched successfully',
            data:allCourses
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Cannot fetch course data',
            error:error.message
        })
    }
}