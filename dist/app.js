import express from "express";
const app = express();
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import { getAllUsers, newUser } from "./controllers/user.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;
connectDb();
// app.use("/api/v1/user",userRoute);
app.post("/new", newUser);
app.get("/all", getAllUsers);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});
