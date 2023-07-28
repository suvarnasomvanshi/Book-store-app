import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import {
    TextField,
    FormLabel,
    Box,
    Button,
    FormControlLabel,
    Checkbox,
  } from "@mui/material";



const BookDetail = () => {

    const[inputs,setInputs] =useState({});
    const [checked,setChecked]=useState(false)
    const id = useParams().id;
    const history = useNavigate();
    
    useEffect(()=>{

       const fetchHandeler = async()=>{
        await axios.get(`http://localhost:5000/books/${id}`)
        .then(res=>res.data)
        .then((data)=>setInputs(data.book))
       }

       fetchHandeler().then(data=>setInputs(data.book))
    },[])


    const handleChange=(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name] : e.target.value,
        }));
      }


    const sendRequest = async()=>{
        await axios.put(`http://localhost:5000/books/${id}`,
        {
            name:String(inputs.name),
            auther:String(inputs.auther),
            price:Number(inputs.price),
            description:String(inputs.description),
            image:String(inputs.image),
            available:Boolean(checked)
           }
        ).then(res=>res.data)
    }

    const handleSubmit =(e)=>{
       e.preventDefault();
       sendRequest().then(()=>history("/books"))
    }

    

  return (
    <div>
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
            update Book
          </Button>
        </Box>
      </form>
      
    </div>
  )
}

export default BookDetail
