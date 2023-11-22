"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendToClient = void 0;
// this is alternative custom handler for sending same structure data to client
const SendToClient = (res, data) => {
    res.send({ success: true, data });
};
exports.SendToClient = SendToClient;
