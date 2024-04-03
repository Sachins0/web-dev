const SubSection=require("../models/SubSection")
const Section=require("../models/Section")
const { uploadIamgeToCloudinary } = require("../utils/imageUploader")

//create SubSection

exports.createSubSection=async(req,res)=>{
    try {
        //fetch data
        const {sectionId,title,timeDuration,description}=req.body
        //extract file/video
        const video=req.files.videoFiles
        //validation
        if(!sectionId || !title || !timeDuration || !description){
            return res.status(400).json({
                success:false,
                message:'All fields are required'
            })
        }
        //upload video to cloudinary
        const uploadDetails=await uploadIamgeToCloudinary(video,process.env.FOLDER_NAME)

        //create a subsection
        const subSectionDetails=await SubSection.create({
            title:title,
            timeDuration:timeDuration,
            description:description,
            videoUrl:uploadDetails.secure_url
        })
        //update section with this subsection objectId
        const updatedSection=await Section.findByIdAndUpdate(
            {_id:sectionId},
            {$push:{
                subSection:subSectionDetails._id,
            }},
            {new:true}
        )//* log updated section after populate query
        //return res
        return res.status(200).json({
            success:true,
            message:'Sub Section created successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Internal Server error',
            error:error.message
        })
        
    }
}

//* update subSection

//* delete subSection