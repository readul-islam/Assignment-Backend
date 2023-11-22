"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.notFound = void 0;
// not found handler
const notFound = (req, res, next) => {
    const err = new Error("Route not found");
    err.status = 404;
    return next(err);
};
exports.notFound = notFound;
// global handler
// ErrorRequestHandler handling all function parameter type
const globalErrorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        error: err.message || "Unknown Error",
    });
};
exports.globalErrorHandler = globalErrorHandler;
