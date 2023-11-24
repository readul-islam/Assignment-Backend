import { NextFunction, Request, Response } from "express";
import { ErrorResponse, SuccessResponse } from "../../../middleware";
import { TUserController } from "../helper/user.interface";
import {
  createNewUser,
  getTotalAmountOfOrders,
  getUser,
  getUserOrders,
  getUsers,
  removeUser,
  updateUser,
  updateUserOrder,
} from "../service";

class UserController implements TUserController {
  // create a new user
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await createNewUser(res, req.body);
      if (user) {
      const data = user.toObject();
      const {orders, _id , ...rest} = data;
      SuccessResponse(res, rest, "User created successfully!");
     }
   } catch (error: any) {
     next(error);
   }
 }
  

  // get all users
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await getUsers(req.body);
      if (users) {
        SuccessResponse(res, users, "Users fetched successfully!");
      } else {
        ErrorResponse(res, 404, "Users not found");
      }
    } catch (error) {
      next(error);
    }
  }

  // get a specific user
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await getUser(req.params);
      if (user) {
        SuccessResponse(res, user, "User fetched successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }

  // update a specific user
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const updated = await updateUser(req.params, req.body);
      if (updated) {
        SuccessResponse(res, updated, "User updated successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }

  // remove a specific user
  async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted = await removeUser(req.params);
      if (deleted) {
        SuccessResponse(res, null, "User deleted successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }

  // get all orders of specific user
  async getUserOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const orders = await getUserOrders(req.params);
      if (orders) {
        SuccessResponse(res, orders, "Order fetched successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }

  // update order of specific user or create
  async updateUserOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const updateOrder = await updateUserOrder(req);
      if (updateOrder) {
        SuccessResponse(res, updateOrder, "Order created successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }
  
  // get total amount of order
  async getTotalAmountOfOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const ordersAmount = await getTotalAmountOfOrders(req.params);
      if (ordersAmount) {
        SuccessResponse(res, ordersAmount, "Total price calculated successfully!");
      } else {
        ErrorResponse(res, 404, "User not found");
      }
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
