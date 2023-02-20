import express from 'express'
import adminController from '../controllers/adminController.js'

const router = express.Router()





// get products
router.get('/products', adminController.getuser)
// add products
router.post('/product', adminController.getuser)
// remove products
router.delete('/product/:id', adminController.getuser)
// update products
router.put('/product/:id', adminController.getuser)

//add categories
router.post('/category', adminController.getuser)
//get categories
router.get('/categories', adminController.getuser)
//edit categories
router.put('/category/:id', adminController.getuser)
//remove categories
router.delete('/category/:id', adminController.getuser)


//get order details
router.get('/orders',adminController.getuser)
// update order details 
router.put('/order/:id',adminController.getuser)
// delete order details 
router.delete('/order/:id',adminController.getuser)


//add homepage cover pic
router.post('/coverpic',adminController.getuser)
//update homepage cover pic
router.put('/changecover',adminController.getuser)






export default router