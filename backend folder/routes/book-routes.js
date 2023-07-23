import express from "express";
import Book  from "../model/Book";



const router  = express.Router();

router("/",addBook);