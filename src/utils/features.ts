import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "Ecommerce25",
    })
    .then((c) =>console.log(`Db connected to ${c.connection.host}`))
    .catch((e) => console.log(e))
};
