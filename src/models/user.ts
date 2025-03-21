import mongoose from "mongoose";
import validator from "validator";

interface Iuser extends Document{ // Iuser is an interface of ts for user doc // extends document ensures model will be  mongodb document  
    _id:string,
    role:"admin" | "user",
    name:string,
    gender:"male"| "female",
    photo:string,
    email:string,
    dob:Date,
    createdAt:Date,
    updatedAt:Date,
    age:number
}

const Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter your id"],// if id is not present it will print required[1]
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Please enter your gender"],
    },
    photo: {
      type: String,
      required: [true, "Please enter add photo"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please enter your email"],
      validate: validator.default.isEmail,
    },
    dob: {
      type: Date,
      required: [true, "Please enter your Date of birth"],
    },
  },
  {
    timestamps: true,
  }
);
Schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob; // Fetching date of birth from the document
    let age = today.getFullYear() - dob.getFullYear();

    if (
        today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
    ) {
        age--; // Subtract 1 if the birthday hasn't occurred this year yet
    }

    return age;
});


export const User = mongoose.model<Iuser>("User", Schema);
