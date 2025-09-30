import express from "express";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000


app.use("/api/auth/", authRoutes);



app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
  connectMongoDB();
});
