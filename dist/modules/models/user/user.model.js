"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const fullNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, "firstName is required"],
        maxlength: [20, "firstName can not be more than 20 characters"],
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, "firstName is required"],
        maxlength: [20, "lastName can not be more than 20 characters"],
    },
});
const addressSchema = new mongoose_1.Schema({
    street: String,
    city: String,
    country: String,
});
const ordersSchema = new mongoose_1.Schema({
    productName: {
        type: String,
        unique: true,
        required: [true, "productName is required"],
    },
    price: {
        type: Number,
        require: [true, "price is required"],
    },
    quantity: {
        type: Number,
        required: [true, "quantity is required"],
    },
});
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        unique: true,
        required: [true, "userId is required"],
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "username is required"],
    },
    password: String,
    fullName: {
        type: fullNameSchema,
        required: [true, "fullName is required"],
    },
    age: {
        type: Number,
        required: [true, "age is required"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"],
    },
    isActive: Boolean,
    hobbies: Array,
    address: {
        type: addressSchema,
        required: [true, "address is required"],
    },
    orders: { type: ordersSchema, required: [true, "orders is required"] },
});
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
