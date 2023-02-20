import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    customerAddress:{
        type:String,
        required:true
    },
    customerEmail:{
        type:String,
        required:true
    },
    customerPincode:{
        type:Number,
        required:true
    },
    customerPhone:{
        type:Number,
        required:true,
    },
    orderStatus:{
        type:String,
        required:true,
        default:''
    },
    dateOfOrder:{
        type:String,
        required:true
    },
    paymentType:{
        type:String,
        required:true,
        default:'COD'
    },
    paymentStatus:{
        type:Boolean,
        required:true,
        default:false
    }

},{timestamps:true})


export default mongoose.model('Order',orderSchema)