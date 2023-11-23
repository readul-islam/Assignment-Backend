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
const common_handler_1 = require("../../../middleware/common.handler");
const service_1 = require("../service");
class UserController {
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.createNewUser)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "User created successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.getUser)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "Users fetched successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.getAllUsers)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "Users fetched successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.updateUser)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "User updated successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    removeUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.removeUser)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "User deleted successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    getUserOrders(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.getUserOrders)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "Order fetched successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateUserOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.updateUserOrder)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "Order created successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
    getTotalAmountOfOrder(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield (0, service_1.getTotalAmountOfOrders)(req.body);
                (0, common_handler_1.SuccessResponse)(res, user, "Total price calculated successfully!");
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();