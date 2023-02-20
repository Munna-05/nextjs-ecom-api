import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryCover:{
        type:String,
        required:true
    }
},{timestamps:true})

export default mongoose.model('Category',categorySchema)