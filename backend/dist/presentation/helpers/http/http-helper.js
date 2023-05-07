"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorized = exports.forbidden = exports.badRequest = exports.noContent = exports.ok = exports.serverError = void 0;
const unauthorized_error_1 = require("../../../presentation/errors/unauthorized-error");
const server_error_1 = require("../../errors/server-error");
const serverError = (error) => ({
    body: new server_error_1.ServerError(error.stack),
    statusCode: 500
});
exports.serverError = serverError;
const ok = (data) => ({
    body: data,
    statusCode: 200
});
exports.ok = ok;
const noContent = () => ({
    body: null,
    statusCode: 204
});
exports.noContent = noContent;
const badRequest = (error) => ({
    body: error,
    statusCode: 400
});
exports.badRequest = badRequest;
const forbidden = (error) => ({
    body: error,
    statusCode: 403
});
exports.forbidden = forbidden;
const unauthorized = () => ({
    body: new unauthorized_error_1.UnauthorizedError(),
    statusCode: 401
});
exports.unauthorized = unauthorized;
//# sourceMappingURL=http-helper.js.map