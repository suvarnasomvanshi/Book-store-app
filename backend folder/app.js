
import express from "express";
import mongoose from "mongoose";
import router from "./routes/book-routes";
import cors from "cors";
import dotenv from "dotenv";


const app = express();
const MONGODB_URI = process.env.MONGODB_URI ;


//middleware
app.use(express.json());
app.use(cors());
app.use("/books",router);     //main routes in localhost



mongoose.connect("MONGODB_URI")
.then(()=>{console.log(app.listen(5000))})
.then(()=>{console.log("connected to database & listening to port 5000")})
.catch((err)=>{console.log(err)});








