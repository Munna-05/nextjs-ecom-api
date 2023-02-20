import Product from '../mongooseModels/productSchema.js'
import Category from '../mongooseModels/categorySchema.js'
import Order from '../mongooseModels/orderSchema.js'

const adminController = {
    getuser: async (req, res) => {

    },
    //get all orders
    getallorders: async (req, res) => {
        try {
            const orders = await Order.find()

            res.status(200).json(orders)
        } catch (err) {
            res.status(400).json(err)
        }
    },
    //update orders
    updateOrder: async (req, res) => {
        try {
            const updated = await Order.findByIdAndUpdate()
            res.status(200).json(updated)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    //create products
    createProducts: async (req, res) => {
        console.log(req.body)
        try {
            const product = new Product(req.body);
            const savedProduct = await product.save()
            console.log(savedProduct)
            if (savedProduct) res.status(200).json(savedProduct)
        } catch (error) {
            res.status(400).json(error)

        }

    },

    //read products 
    getAllProducts: async (req, res) => {
        try {
            const allproducts = await Product.find()
            res.status(200).json(allproducts)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    //update products
    updateProduct: async (req, res) => {
        try {
            const updated = await Product.findByIdAndUpdate()
            res.status(200).json(updated)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    //delete products
    deleteProduct: async (req, res) => {
        try {
            const res = await Product.findByIdAndDelete()
            res.status(200).json(res)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    //create categories
    createCategories: async (req, res) => {
        try {
            const category = new Category(req.body)
            const saved = await category.save()
            if (saved) res.status(200).json(saved)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    //read categories
    getAllCategories: async (req, res) => {
        const categories = ['watches', 'shirts', 'tshirts', 'pants', 'shoes', 'sunglasses', 'jeans','cosmetics','perfumes','caps']

        try {
            const allCategories = await Category.find()
            // if (allCategories) res.status(200).json(allCategories)
            res.status(200).json(categories)
        } catch (error) {
            res.status(400).json(error)
        }
    },
    //update categories
    updateCategory: async (req, res) => {
        try {
            const updated = await Category.findByIdAndUpdate()
            if (updated) res.status(200).json(updated)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    //delete categories
    deleteCategory: async (req, res) => {
        try {
            const deleted = await Category.findByIdAndDelete()
            if (deleted) res.status(200).json(deleted)
        } catch (error) {
            res.status(400).json(error)
        }
    }

}

export default adminController