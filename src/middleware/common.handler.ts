import { Response } from "express";

type TSuccessResponse = (res: Response, data: any, message: string) => void;
type TErrorResponse = (res: Response, statusCode: number, message: string) => void;

// this is alternative custom handler for sending same structure data to client for successful responses
const SuccessResponse: TSuccessResponse = (res, data, message) => {
  res.send({ success: true, message, data });
};

// this is alternative custom handler for sending same structure data to client for error response
const ErrorResponse:TErrorResponse = (res, statusCode, message)=>{
  res.send({ success: false, message,error:{
    code:statusCode,
    description: message,
  } });
}

// class HttpError extends Error {
//   statusCode: number;

//   constructor(message: string, statusCode: number) {
//     super(message);
//     this.name = 'HttpError';
//     this.statusCode = statusCode;
//   }
// }

// Example of throwing an error with a status code


export { ErrorResponse, SuccessResponse };



