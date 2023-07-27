import express from "express";
import { addBook, deleteBook, getAllbooks, getById, updateBook } from "../controllers/book-controller";



const router = express.Router();


router.get("/",getAllbooks);
router.post("/",addBook);
router.get("/:id",getById);
router.put("/:id",updateBook);
router.delete("/:id",deleteBook)

export default router;
