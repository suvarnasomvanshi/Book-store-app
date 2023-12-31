import React, { useState } from "react";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const AddBook = () => {

  const history = useNavigate()

  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    auther: "",
    image: "",
  });

 const [checked,setChecked] = useState(false)




  const handleChange=(e)=>{
    setInputs((prevState)=>(
      {
      ...prevState,
      [e.target.name] : e.target.value 
    }))
  }



const sendRequest =async()=>{
 await axios.post("http://localhost:5000/books/",
 {
  name:String(inputs.name),
  auther:String(inputs.auther),
  price:Number(inputs.price),
  description:String(inputs.description),
  image:String(inputs.image),
  available:Boolean(checked)
 }
 ).then(res=>res.data);
}


const handleSubmit=(e)=>{
  e.preventDefault();
  sendRequest().then(()=>history("/books"))
}

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"centre"}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={"10"}
          maxWidth="700px"
        >
          <FormLabel>Name</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />

          <FormLabel>Author</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="auther"
            value={inputs.author}
            onChange={handleChange}
          />

          <FormLabel>desciption</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
            value={inputs.description}
            onChange={handleChange}
          />

          <FormLabel>price</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            type="number"
            name="price"
            value={inputs.price}
            onChange={handleChange}
          />

          <FormLabel>image</FormLabel>
          <TextField
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            value={inputs.image}
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>}
            label="Label"
          />

          <Button varient="content" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AddBook;
