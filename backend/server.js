import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary } from "cloudinary"

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
cloudinary.config({

  cloudinary_uri:process.env.CLOUDINARY_URL
}
)

const app = express();
const PORT = process.env.PORT || 5000

//middlerware
app.use(express.json())//to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);



app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
  connectMongoDB();
 

  
});
