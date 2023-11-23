import { NextFunction, Request, Response } from "express";

// controller type
interface TUser {
    createUser(req: Request, res: Response, next: NextFunction): void;
    getUsers(req: Request, res: Response, next: NextFunction): void;
    updateUser(req: Request, res: Response, next: NextFunction): void;
    removeUser(req: Request, res: Response, next: NextFunction): void;
    getUserOrders(req: Request, res: Response, next: NextFunction): void;
    updateUserOrder(req: Request, res: Response, next: NextFunction): void;
    updateUserOrder(req: Request, res: Response, next: NextFunction): void;
    updateUserOrder(req: Request, res: Response, next: NextFunction): void;
    getTotalAmountOfOrder(req: Request, res: Response, next: NextFunction): void;
  };

// service type



export {
    TUser
}