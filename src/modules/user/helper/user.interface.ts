import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

// user scheme type
interface TUserFullName {
    firstName: string;
    lastName: string;
  }
  interface TUserAddress {
    street: string;
    city: string;
    country: string;
  }
  interface TUserOrders {
    productName: string;
    price: number;
    quantity: number;
  }
  interface TUserSchema {
    userId: number;
    username: string;
    password: string;
    fullName: TUserFullName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: Array<string>;
    address: TUserAddress;
    orders?: Array<TUserOrders>;
  }



  
  // user controller type
interface TUserController {
  createUser(req: Request, res: Response, next: NextFunction): void;
  getUsers(req: Request, res: Response, next: NextFunction): void;
  updateUser(req: Request, res: Response, next: NextFunction): void;
  removeUser(req: Request, res: Response, next: NextFunction): void;
  getUserOrders(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  updateUserOrder(req: Request, res: Response, next: NextFunction): void;
  getTotalAmountOfOrder(req: Request, res: Response, next: NextFunction): void;
}


// create a static method interface 
export interface UserModel extends Model<TUserSchema> {
  isUserExists(id: string): Promise<TUserSchema | null>;
}


export { TUserController,TUserFullName,TUserAddress ,TUserOrders,TUserSchema };
