import { NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";


export const newUser =async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {name,email,photo,_id,address,gender,dob} = req.body;
        const user = await User.create({name,email,photo,_id,address,gender,dob});

        return res.status(200).json({
            success:true,
            message:`Welcome ${user.name}`,
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:error,
    }
};
