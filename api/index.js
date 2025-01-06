import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js"; // always remember to add js in the end else you can get a error;

dotenv.config();

mongoose
  .connect(process.env.MONGO) // to use this we need to import dotenv package;
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});

app.use("/api/user", userRoutes);
