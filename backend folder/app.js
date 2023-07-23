//CGoHL39fcq92jlL5
//mongodb+srv://admin:<password>@cluster0.krk1nt9.mongodb.net/?retryWrites=true&w=majority

import express from "express";
import mongoose from "mongoose";


const app = express();

//middleware
app.use("/",(req,res,next)=>{
    res.send("this is our starting app")
})





mongoose.connect("mongodb+srv://admin:CGoHL39fcq92jlL5@cluster0.krk1nt9.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log(app.listen(5000))})
.then(()=>{console.log("connected to database & listening to port 5000")})
.catch((err)=>{console.log(err)});




