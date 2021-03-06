var mongoose=require("mongoose")
bookingsSchema=new mongoose.Schema({
    checkin:Date,
    checkout:Date,
    user:{
        id:{
           type: mongoose.Schema.Types.ObjectId,
           ref: "user"
        },
        username: String
    },
    slot:{
        id:{
           type: mongoose.Schema.Types.ObjectId,
           ref: "slot"
        },
        slotnumber:Number
    }
})

module.exports=mongoose.model("bookings",bookingsSchema)