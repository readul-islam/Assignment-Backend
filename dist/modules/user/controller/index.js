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
const middleware_1 = require("../../../middleware");
const service_1 = require("../service");
class UserController {
    // create a new user
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.createNewUser)(res, req.body);
                if (user) {
                    (0, middleware_1.SuccessResponse)(res, user, "User created successfully!");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get all users
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield (0, service_1.getUsers)(req.body);
                if (users) {
                    (0, middleware_1.SuccessResponse)(res, users, "Users fetched successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "Users not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get a specific user
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.getUser)(req.params);
                if (user) {
                    (0, middleware_1.SuccessResponse)(res, user, "User fetched successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // update a specific user
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updated = yield (0, service_1.updateUser)(req.params, req.body);
                if (updated) {
                    (0, middleware_1.SuccessResponse)(res, updated, "User fetched successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // remove a specific user
    removeUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleted = yield (0, service_1.removeUser)(req.params);
                if (deleted) {
                    (0, middleware_1.SuccessResponse)(res, null, "User deleted successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get all orders of specific user
    getUserOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const orders = yield (0, service_1.getUserOrders)(req.params);
                if (orders) {
                    (0, middleware_1.SuccessResponse)(res, orders, "Order fetched successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // update order of specific user or create
    updateUserOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateOrder = yield (0, service_1.updateUserOrder)(req);
                if (updateOrder) {
                    (0, middleware_1.SuccessResponse)(res, updateOrder, "Order created successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
    // get total amount of order
    getTotalAmountOfOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ordersAmount = yield (0, service_1.getTotalAmountOfOrders)(req.params);
                if (ordersAmount) {
                    (0, middleware_1.SuccessResponse)(res, ordersAmount, "Order created successfully!");
                }
                else {
                    (0, middleware_1.ErrorResponse)(res, 404, "User not found");
                }
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();
