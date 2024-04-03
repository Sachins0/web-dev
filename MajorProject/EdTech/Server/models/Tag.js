const mongoose=require("mongoose")

const tagSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    course:{
        //may be array
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }
})

module.exports=mongoose.model("Tag",tagSchema)