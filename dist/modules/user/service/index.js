"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserOrder = exports.updateUser = exports.removeUser = exports.getUsers = exports.getUserOrders = exports.getUser = exports.getTotalAmountOfOrders = exports.createNewUser = void 0;
const models_1 = require("../../models");
// create a new user
const createNewUser = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    // const { error, value } = userValidator.validate(reqBody);
    // console.log(value);
    // if (await User.isUserExists(reqBody.id)) {
    //   throw new Error("User already exist!");
    // }
    // if (!error) {
    //  const user = await User.create(value);
    //  return user
    // }
    // return (error);
    const user = yield models_1.User.create(reqBody);
    return user;
});
exports.createNewUser = createNewUser;
// get all user
const getUsers = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.User.find().select("-password");
    return users;
});
exports.getUsers = getUsers;
// get specific user
const getUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const user = yield models_1.User.findOne({ userId }).select("-password");
    return user;
});
exports.getUser = getUser;
// update a specific user
const updateUser = (params, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const user = yield models_1.User.findOneAndUpdate({ userId }, Object.assign({}, reqBody), { returnOriginal: false }).select("-password");
    return user;
});
exports.updateUser = updateUser;
// remove a specific user
const removeUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const deleteUser = yield models_1.User.deleteOne({ userId });
    console.log(deleteUser);
    return deleteUser.deletedCount;
});
exports.removeUser = removeUser;
// get specific user orders
const getUserOrders = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    console.log(params);
    const orders = yield models_1.User.findOne({ userId }).select("orders -_id");
    return orders;
});
exports.getUserOrders = getUserOrders;
// update orders
const updateUserOrder = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const newProduct = yield models_1.User.findOneAndUpdate({ userId }, { $push: { orders: req.body } }, { returnOriginal: false }).select("orders -_id");
    return newProduct;
});
exports.updateUserOrder = updateUserOrder;
// get total amount of orders
const getTotalAmountOfOrders = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const id = parseInt(userId);
    const calculateAmount = yield models_1.User.aggregate([
        { $match: { userId: id } },
        { $unwind: "$orders" },
        {
            $group: {
                _id: null,
                totalPrice: {
                    $sum: { $multiply: ["$orders.price", "$orders.quantity"] },
                },
            },
        },
        {
            $project: { _id: 0 },
        },
    ]);
    return calculateAmount[0];
});
exports.getTotalAmountOfOrders = getTotalAmountOfOrders;
