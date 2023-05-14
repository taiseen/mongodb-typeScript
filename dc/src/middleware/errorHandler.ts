import { ErrorRequestHandler } from "express";
import httpErrors from 'http-errors';



// just error message throw...
export const customErrorMessage = () => {
    throw httpErrors(404, 'Route Not Found...❗');
};



// error message handler...
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {

    if (err.headersSend) return next(err);

    res.status(err.statusCode || 500)
        .json({
            status: err.status,
            message: err.message || 'Unknown Error',
        });
}