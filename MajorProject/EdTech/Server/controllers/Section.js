const Section=require("../models/Section")
const Course=require("../models/Course")

exports.createSection=async(req,res)=>{
    try {
        //data fetch
        const {sectionName,courseId}=req.body
        //data validation
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:'Missing Properties'
            })
        }
        //create Section
        const newSection=await Section.create({sectionName})
        //update course with section objId
        const updatedCourseDetails=await Course.findByIdAndUpdate(
            courseId,
            {
                $push:{
                    courseContent:newSection._id,
                }
            },
            {new:true}
        )
        //* how to populate section and subsection in one time

        //return res
        return res.status(200).json({
            success:true,
            message:'Section created successfully',
            updatedCourseDetails
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to create Section',
            error:error.message
        })
    }
}

exports.updateSection=async(req,res)=>{
    try {
        //data input
        const {sectionName,sectionId}=req.body
        //data validation
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:'Missing Properties'
            })
        }
        //update data
        const section=await Section.findByIdAndUpdate(sectionId,{sectionName},{new:true})
        //return res
        return res.status(200).json({
            success:true,
            message:'Section updated successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to update Section',
            error:error.message
        })
    }
}

exports.deleteSection=async(req,res)=>{
    try {
        //get id => assumin we are sending ID in params
        const {sectionId}=req.params
        //use findByIdAndDelete 
        await Section.findByIdAndDelete(sectionId)
        //* need to delete from course Schema
        
        //return res
        return res.status(200).json({
            success:true,
            message:'Section Deleted successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Unable to delete Section',
            error:error.message
        })
    }
}