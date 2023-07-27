import Book from "../model/Book";



export const getAllbooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "book doesnt find" });
  }
  return res.status(200).json({ books });
};





export const addBook = async (req, res, next) => {

  const { name, auther, price, description, availabe, image} = req.body;

  let book;

  try {
    book = new Book({ name, auther, price, description, availabe ,image});
    await book.save();
  } catch (err) {
    console.log(err);
  }


  if (!book) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ book });
};




export const getById = async(req,res,next)=>{
 
    const id = req.params.id;
    let book;
    try{
        book = await Book.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"book not find"});
    }
    return res.status(201).json({book});
}




export const updateBook = async(req,res,next) =>{
   const id = req.params.id;
   const { name, auther, price, description, availabe ,image } = req.body;

   let book ;
   try{
      book = await Book.findByIdAndUpdate(id,{
      name,
      auther,
      price, 
      description, 
      availabe,
      image
    });
    book = await book.save();
   }catch(err){
    console.log(err);
   }

   if(!book){
     return res.status(404).json({message:"update the book"})
   }
   return res.status(201).json({book});

   
};



export const deleteBook = async (req,res,next) =>{
  
  const id =req.params.id;

  let book;
  try{
    book = await Book.findByIdAndRemove(id);
  }catch(err){
    console.log(err);
  }
  if(!book){
    return res.status(404).json({message:"unable to delete by this id"});
  }
  return res.status(200).json({book});
};