import express from 'express'
import adminController from '../controllers/adminController.js'

const router = express.Router()


//admin login
router.post('/login', adminController.getuser)


// get products
router.get('/products', adminController.getAllProducts)
// add products
router.post('/product', adminController.createProducts)
// remove products
router.delete('/product/:id', adminController.deleteProduct)
// update products
router.put('/product/:id', adminController.updateProduct)

//add categories
router.post('/category', adminController.createCategories)
//get categories
router.get('/categories', adminController.getAllCategories)
//edit categories
router.put('/category/:id', adminController.updateCategory)
//remove categories
router.delete('/category/:id', adminController.deleteCategory)


//get order details
router.get('/orders',adminController.getallorders)
// update order details 
router.put('/order/:id',adminController.updateOrder)
// delete order details 
// router.delete('/order/:id',adminController.de)


//add homepage cover pic
router.post('/coverpic',adminController.getuser) 
//update homepage cover pic
router.put('/changecover',adminController.getuser)






export default router