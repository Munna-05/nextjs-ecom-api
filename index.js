import express from 'express'
import mongoose from 'mongoose'
import mongoURL from './config.js'
import multer from 'multer'
import bodyParser from 'body-parser'
import cors from 'cors'


import adminrouter from './Routes/adminRouter.js'
import userRouter from './Routes/userRouter.js'

const app = express()
const PORT = 5000 || 5001
mongoose.set('strictQuery', false)


app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`)
    mongoose.connect(mongoURL).then(() => {
        console.log('connected to database')
    }).catch(err => console.log(err))
}) 
 
app.use(express.json())
app.use(bodyParser.json());  
app.use(cors())

app.use('/admin', adminrouter)
app.use('/user', userRouter)
 