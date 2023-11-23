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
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
const config_1 = require("../../config");
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
}, { _id: false });
const addressSchema = new mongoose_1.Schema({
    street: String,
    city: String,
    country: String,
}, { _id: false });
const ordersSchema = new mongoose_1.Schema({
    productName: {
        type: String,
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
}, { _id: false });
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
    hobbies: {
        type: [String],
        required: [true, "hobbies is required"],
    },
    address: {
        type: addressSchema,
        required: [true, "address is required"],
    },
    orders: { type: [ordersSchema], required: [true, "orders is required"] },
});
// secure our password by bcrypt
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield bcrypt_1.default.hash(this.password, Number(config_1.bcrypt_salt));
        next();
    });
});
// hide password from response
userSchema.post("save", function (user, next) {
    return __awaiter(this, void 0, void 0, function* () {
        user.password = "";
        next();
    });
});
//custom static method
userSchema.statics.isUserExists = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User.findOne({ userId: id });
        return user;
    });
};
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
