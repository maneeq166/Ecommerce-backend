import { NextFunction } from "express";
import { User } from "../models/user.js";
import { NewUserRequestBody } from "../types/types.js";
import { errorHandler } from "../utils/utlility-class.js";
import { TryCatch } from "../middlewares/error.js";

export const newUser = TryCatch(
  async (
    req: Request<{}, {}, NewUserRequestBody>,
    res: Response,
    next: NextFunction
  ) => {

    const { name, email, photo, _id, address, gender, dob } = req.body;
    console.log(name, email, photo, _id, address, gender, dob);


    let user = await User.findById(_id)
    
    if(user){
      return res.status(200).json({
        success: true,
        message: `Welcome ${user.name}`,
      });
    }

    if(!_id || !name || !email || !photo || !gender || !dob){
      return next(new errorHandler("Please add all fields",400))
    }

    user = await User.create({
      name,
      email,
      _id,
      photo,
      address,
      gender,
      dob: new Date(dob),
    });

    
    return res.status(201).json({
      success: true,
      message: `Welcome ${user.name}`,
    });
  }
);

export const getAllUsers = () =>{
  TryCatch(async (req:Request,res:Response,next:NextFunction) =>{
      const users = await User.find({})

      return res.status(201).json({
        success:true,
        users,
        
      })
  })
}
