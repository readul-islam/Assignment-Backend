"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = __importDefault(require("./controller"));
const router = express_1.default.Router();
const userRouter = express_1.default.Router();
// crate a user
userRouter.post('/', controller_1.default.createUser);
// get all users
userRouter.get('/', controller_1.default.getUsers);
// get a specific user
userRouter.get('/:userId', controller_1.default.getUser);
// update a specific user
userRouter.put('/:userId', controller_1.default.updateUser);
// delete a specific user
userRouter.delete('/:userId', controller_1.default.removeUser);
// get orders of a specific user 
userRouter.get('/:userId/orders', controller_1.default.getUserOrders);
// update order  of a specific user 
userRouter.put('/:userId/orders', controller_1.default.updateUserOrder);
// get total amount of orders
userRouter.get('/:userId/orders/total-price', controller_1.default.getTotalAmountOfOrder);
router.use("/users", userRouter);
exports.default = router;
