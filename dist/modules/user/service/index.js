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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserOrder = exports.updateUser = exports.removeUser = exports.getUsers = exports.getUserOrders = exports.getUser = exports.getTotalAmountOfOrders = exports.createNewUser = void 0;
const middleware_1 = require("../../../middleware");
const models_1 = require("../../models");
const user_validator_1 = __importDefault(require("../helper/user.validator"));
// create a new user
const createNewUser = (res, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const result = user_validator_1.default.validate(reqBody);
    if (yield models_1.User.isUserExists(reqBody.id)) {
        throw new Error("User already exist!");
    }
    if (result.error) {
        (0, middleware_1.ErrorResponse)(res, 400, result.error.message);
    }
    else {
        let user = yield models_1.User.create(result.value);
        return user;
    }
});
exports.createNewUser = createNewUser;
// get all user
const getUsers = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield models_1.User.find().select("username fullName email age address -_id");
    return users;
});
exports.getUsers = getUsers;
// get specific user
const getUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const user = yield models_1.User.findOne({ userId }).select("-password -orders -_id");
    return user;
});
exports.getUser = getUser;
// update a specific user
const updateUser = (params, reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const user = yield models_1.User.findOneAndUpdate({ userId }, Object.assign({}, reqBody), { returnOriginal: false }).select("-password -orders -_id");
    return user;
});
exports.updateUser = updateUser;
// remove a specific user
const removeUser = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
    const deleteUser = yield models_1.User.deleteOne({ userId });
    return deleteUser.deletedCount;
});
exports.removeUser = removeUser;
// get specific user orders
const getUserOrders = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = params;
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
