import { Typography,Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
         <Box display="flex" flexDirection="column" alignItems="centre">
           <Button LinkComponent={Link}  to="/books" varient="contained" sx={{mt:15,backgroundColor:"orangered"}}>
            <Typography varient="h3">view all product</Typography>
           </Button>

         </Box>
    </div>
  )
}

export default Home
