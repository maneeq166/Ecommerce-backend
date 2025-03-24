import { NextFunction } from "express";
import { errorHandler } from "../utils/utlility-class.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err: errorHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export const TryCatch = (func: ControllerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(func(req, res, next).catch(next));
  };
};
