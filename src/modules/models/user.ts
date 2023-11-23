import { Model, Schema } from "mongoose";

const userSchema = new Schema({
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

const User = new Model("user", userSchema);

export default User;
