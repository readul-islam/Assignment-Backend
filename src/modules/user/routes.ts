import express from "express";

const router = express.Router()
const userRouter = express.Router();

// crate a user
userRouter.post('/')
// get all users
userRouter.get('/',(req, res)=>{
res.send({success:true})
})
// get a specific user
userRouter.get('/:userId')
// update a specific user
userRouter.put('/:userId')
// delete a specific user
userRouter.delete('/:userId')
// get orders of a specific user 
userRouter.get('/:userId/orders')
// update order  of a specific user 
userRouter.put('/:userId/orders')
// get total amount of orders
userRouter.get('/:userId/orders/total-price')








router.use("/users", userRouter)

export default router