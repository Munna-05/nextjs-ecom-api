import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productStock:{
        type:Number,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    availableSizes:{
        type:Array
    },
    productDiscount:{
        type:Number
    },
    productImage:{
        type:String,
        required:true
    }
    
},
{ timestamps: true }
)

export default mongoose.model("Product",productSchema)