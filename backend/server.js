import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {v2 as cloudinary } from "cloudinary"
import path from "path"

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import notificationRoutes from "./routes/notificationRoute.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();
cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    

const app = express();
const PORT = process.env.PORT || 5000
const __dirname = path.resolve()

//middlerware
app.use(express.json())//to parse req.body
app.use(express.urlencoded({ extended: true })); // to parse form data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/post",postRoutes)
app.use("/api/notifications",notificationRoutes)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
}
// if(process.env.NODE_ENV ==='production'){
//   app.use(express.static(path.join(__dirname,"/frontend/dist")));

//   app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
//   })


// }




app.listen(PORT, () => {
  console.log(`The server is running on Port ${PORT}`);
  connectMongoDB();
 

  
});
