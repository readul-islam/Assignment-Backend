"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = exports.ErrorResponse = void 0;
// this is alternative custom handler for sending same structure data to client for successful responses
const SuccessResponse = (res, data, message) => {
    res.send({ success: true, message, data });
};
exports.SuccessResponse = SuccessResponse;
// this is alternative custom handler for sending same structure data to client for error response
const ErrorResponse = (res, statusCode, message) => {
    res.send({ success: false, message, error: {
            code: statusCode,
            description: message,
        } });
};
exports.ErrorResponse = ErrorResponse;
