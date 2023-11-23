"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        unique: true,
    },
    username: {
        type: String,
        unique: true,
    },
    password: String,
    fullName: {
        firstName: String,
        lastName: String,
    },
    age: Number,
    email: {
        type: String,
        unique: true,
    },
    isActive: Boolean,
    hobbies: Array,
    address: {
        street: String,
        city: String,
        country: String,
    },
    orders: {
        productName: String,
        price: Number,
        quantity: Number,
    },
});
const User = new mongoose_1.Model("user", userSchema);
exports.default = User;
