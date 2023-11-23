import { Request, Response } from "express";
import { User } from "../../models";
import userValidator from "../helper/user.validator";
import { ErrorResponse } from "../../../middleware";

// create a new user
const createNewUser = async (res: Response, reqBody: any) => {
  const { error, value } = userValidator.validate(reqBody);

  if (await User.isUserExists(reqBody.id)) {
    throw new Error("User already exist!");
  }
  if (error) {
    ErrorResponse(res, 400, error.toString());
  } else {
    const user = await User.create(reqBody);
    return user;
  }
};
// get all user
const getUsers = async (reqBody: any) => {
  const users = await User.find().select("username fullName email age address -_id");
  return users;
};

// get specific user
const getUser = async (params: any) => {
  const { userId } = params;

  const user = await User.findOne({ userId }).select("-password");
  return user;
};

// update a specific user
const updateUser = async (params: any, reqBody: any) => {
  const { userId } = params;

  const user = await User.findOneAndUpdate(
    { userId },
    { ...reqBody },
    { returnOriginal: false }
  ).select("-password");

  return user;
};

// remove a specific user
const removeUser = async (params: any) => {
  const { userId } = params;

  const deleteUser = await User.deleteOne({ userId });
  console.log(deleteUser);
  return deleteUser.deletedCount;
};

// get specific user orders
const getUserOrders = async (params: any) => {
  const { userId } = params;
  console.log(params);
  const orders = await User.findOne({ userId }).select("orders -_id");
  console.log(orders);
  return orders;
};

// update orders
const updateUserOrder = async (req: Request) => {
  const { userId } = req.params;
  const newProduct = await User.findOneAndUpdate(
    { userId },
    { $push: { orders: req.body } },
    { returnOriginal: false }
  ).select("orders -_id");

  return newProduct;
};

// get total amount of orders
const getTotalAmountOfOrders = async (params: any) => {
  const { userId } = params;
  const id = parseInt(userId);
  const calculateAmount = await User.aggregate([
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
};

export {
  createNewUser,
  getTotalAmountOfOrders,
  getUser,
  getUserOrders,
  getUsers,
  removeUser,
  updateUser,
  updateUserOrder,
};
