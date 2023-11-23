import { NextFunction, Request, Response } from "express";
import {
  createNewUser,
  getAllUsers,
  getTotalAmountOfOrders,
  getUser,
  getUserOrders,
  removeUser,
  updateUser,
  updateUserOrder,
} from "../service";
import { TUser } from "../helper/user.interface";
import { SendToClient } from "../../../middleware/common.handler";



class User implements TUser {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await createNewUser(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await getUser(req.body);
      SendToClient(res, user)
    } catch (error) {
      next(error);
    }
  }
  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await getAllUsers(req.body);
      SendToClient(res, user)
    } catch (error) {
      next(error);
    }
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await updateUser(req.body);
    } catch (error) {
      next(error);
    }
  }
  async removeUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await removeUser(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getUserOrders(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await getUserOrders(req.body);
    } catch (error) {
      next(error);
    }
  }
  async updateUserOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await updateUserOrder(req.body);
    } catch (error) {
      next(error);
    }
  }
  async getTotalAmountOfOrder(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await getTotalAmountOfOrders(req.body);
    } catch (error) {
      next(error);
    }
  }
}

export default new User();
