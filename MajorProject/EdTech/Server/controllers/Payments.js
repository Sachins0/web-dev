const mongoose=require('mongoose')
const {instance}=require("../config/razorpay")
const Course=require("../models/Course")
const User=require("../models/User")
const mailSender=require("../utils/mailSender")
const {courseEnrollmentEmail}=require("")

//capture the payment and initiate the Razorpay Order
exports.capturePayment=async(req,res)=>{
    //get courseId UserId
    const {course_id}=req.body
    const userId=req.user.id
    //validation
    //valid courseId
    if(!course_id){
        return res.json({
            success:false,
            message:"Please provide valid course id"
        })
    }
    //valid courseDetail
    let course;
    try {
        course=await Course.findById(course_id);
        if(!course){
            return res.json({
                success:false,
                message:"could not find course"
            })
        }
        //user already paid for same course
        const uid=new mongoose.Types.ObjectId(userId)
        if(!course.studentsEnrolled.includes(uid)){
            return res.json({
                success:false,
                message:"already enrolled"
            })
        }

    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
    //order create
    const amount=course.price
    const currency="INR"

    const options={
        amount:amount*100,
        currency,
        reciept:Math.random(Date.now()).toString(),
        notes:{
            courseId:course_id,
            userId,
        }
    }
    
    try {
        //initiate payment using razorpay
        const paymentResponse=await instance.orders.create(options)
        console.log(paymentResponse);
        //return res 
        return res.status(200).json({
            success:true,
            courseName:course.courseName,
            courseDescription:course.courseDescription.at,
            thumbnail:course.thumbnail,
            orderId:paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount,
        })
        
    } catch (error) {
        console.error(error)
        res.json({
            success:false,
            message:"could not initiate order"
        })
    }
}