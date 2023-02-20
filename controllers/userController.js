import Order from '../mongooseModels/orderSchema.js'
import User from '../mongooseModels/userSchema.js'


const userControllers = {


    //create order -- a unique password can be generated while placing an order and the phone number and password can b used for logins
    createOrder: async (req, res) => {
        try {
            const order = new Order(req.body)
            const saved = await order.save()
            if (saved) res.status(200).json(saved)
        } catch (error) {
            res.status(400).json(error)
        }
    },

    // the order id can also be used to track the order

    findOrder: async (req, res) => {
        try {
            const order = await Order.findOne({ _id: req.params.id })
            if (order) res.status(200).json(order)
        } catch (error) {
            res.status(400).json(error)
        }
    },


    //read order -- no need to integrate to the webpage because of no login


    //update order -- get the reason for cancellation 


}

export default userControllers