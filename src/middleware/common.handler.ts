import { Response } from "express";

type TResponse = (res: Response, data: any) => void;

// this is alternative custom handler for sending same structure data to client
const SendToClient: TResponse = (res, data) => {
  res.send({success: true,data});
};

export { SendToClient };
