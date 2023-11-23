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
exports.getTotalAmountOfOrders = exports.updateUserOrder = exports.getUserOrders = exports.removeUser = exports.updateUser = exports.getUser = exports.getAllUsers = exports.createNewUser = void 0;
const createNewUser = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(reqBody);
});
exports.createNewUser = createNewUser;
const getAllUsers = (reqBody) => __awaiter(void 0, void 0, void 0, function* () {
    return { success: true };
});
exports.getAllUsers = getAllUsers;
const getUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.getUser = getUser;
const updateUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.updateUser = updateUser;
const removeUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.removeUser = removeUser;
const getUserOrders = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.getUserOrders = getUserOrders;
const updateUserOrder = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.updateUserOrder = updateUserOrder;
const getTotalAmountOfOrders = (query) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(query);
});
exports.getTotalAmountOfOrders = getTotalAmountOfOrders;
