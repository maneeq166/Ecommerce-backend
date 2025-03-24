import { NextFunction } from "express";

export interface NewUserRequestBody{
    name:string,
    email:string,
    photo:string,
    gender:string,
    address:string,
    _id:string,
    dob:Date,

}

export type ControllerType ((req: Request<{}, {}, NewUserRequestBody>, res: Response, next: NextFunction) => Promise<any>)