"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userRouter = express_1.default.Router();
// crate a user
userRouter.post('/');
// get all users
userRouter.get('/', (req, res) => {
    res.send({ success: true });
});
// get a specific user
userRouter.get('/:userId');
// update a specific user
userRouter.put('/:userId');
// delete a specific user
userRouter.delete('/:userId');
// get orders of a specific user 
userRouter.get('/:userId/orders');
// update order  of a specific user 
userRouter.put('/:userId/orders');
// get total amount of orders
userRouter.get('/:userId/orders/total-price');
router.use("/users", userRouter);
exports.default = router;
