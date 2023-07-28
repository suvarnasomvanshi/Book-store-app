//kbeQis1XaWzRxTDL




import express from "express";
import mongoose from "mongoose";
import router from "./routes/book-routes";
import cors from "cors";



const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use("/books",router);     //main routes in localhost



mongoose.connect("mongodb+srv://admin:kbeQis1XaWzRxTDL@cluster0.m19hqos.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log(app.listen(5000))})
.then(()=>{console.log("connected to database & listening to port 5000")})
.catch((err)=>{console.log(err)});








