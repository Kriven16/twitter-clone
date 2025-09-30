import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

//middlerware
app.use(express.json())//to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);



app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
  connectMongoDB();
 

  
});
