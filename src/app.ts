import express from "express";
const app = express();
import userRoute from "./routes/user.js"
import { connectDb } from "./utils/features.js";

app.use(express.json());

const port = 3000;

connectDb();

app.use("/api/v1/user",userRoute);



app.get("/",(req,res)=>{
    res.send('hloo')
})

app.listen(port,()=>{
    console.log(`Server is running on localhost:${port}`);
    
})
