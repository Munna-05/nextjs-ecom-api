import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pincode:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('User',userSchema)