import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { bcrypt_salt } from "../../config";
import {
  TUserAddress,
  TUserFullName,
  TUserOrders,
  TUserSchema,
  UserModel,
} from "../user/helper/user.interface";

const fullNameSchema = new Schema<TUserFullName>(
  {
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
  },
  { _id: false }
);

const addressSchema = new Schema<TUserAddress>(
  {
    street: String,
    city: String,
    country: String,
  },
  { _id: false }
);

const ordersSchema = new Schema<TUserOrders>(
  {
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
  },
  { _id: false }
);

const userSchema = new Schema<TUserSchema>({
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
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(bcrypt_salt));
  next();
});

// hide password from response
userSchema.post("save", async function (user, next) {
  user.password = "";
  next();
});

//custom static method
userSchema.statics.isUserExists = async function (id: string) {
  const user = await User.findOne({ userId: id });
  return user;
};

const User = model<TUserSchema, UserModel>("user", userSchema);

export default User;
