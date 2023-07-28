import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import AddBook from "./component/AddBook";
import Books from "./component/Book/Books"
import About from "./component/About";
import BookDetail from "./component/BookDetail";


function App() {


  return (
    <div>
     <header>
       <Header/>
     </header>

     <main>
      <Routes>
        <Route exact path="/" element ={<Home/>} />
        <Route exact path="/add" element ={<AddBook/>} />
        <Route exact path="/books" element ={<Books/>} />
        <Route exact path="/about" element ={<About/>} />
        <Route exact path="/books/:id" element={<BookDetail/>} />
      </Routes>
     </main>
    </div>
  );
}

export default App;
