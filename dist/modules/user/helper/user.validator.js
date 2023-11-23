"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const userNameValidator = joi_1.default.object({
    firstName: joi_1.default.string().required().trim().max(20).regex(/^[A-Z][a-z]*$/, { name: 'capitalize' }),
    lastName: joi_1.default.string().required().trim(),
});
const userAddressValidator = joi_1.default.object({
    street: joi_1.default.string().required().trim(),
    city: joi_1.default.string().required().trim(),
    country: joi_1.default.string().required().trim(),
});
const userOrdersValidator = joi_1.default.object({
    productName: joi_1.default.string().required(),
    price: joi_1.default.number().required(),
    quantity: joi_1.default.number().required(),
});
const userValidator = joi_1.default.object({
    userId: joi_1.default.number(),
    username: joi_1.default.string().required().trim(),
    password: joi_1.default.string().required().trim(),
    fullName: userNameValidator.required(),
    age: joi_1.default.number().required(),
    email: joi_1.default.string().required().trim(),
    isActive: joi_1.default.boolean().required(),
    hobbies: joi_1.default.array().items(joi_1.default.string().required()).required(),
    address: userAddressValidator.required(),
    orders: userOrdersValidator.required(),
});
exports.default = userValidator;
