import React from 'react';
import "./App.css"
import TourCard from "./Components/TourCard"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import {Container, Grid, Box } from "@mui/material"
import { ThemeProvider, createTheme } from '@mui/material/styles';


// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#e1cbf2"
    },
    secondary: {
      main: "#b34ff8"
    }
  }
});




export default function App() {
  const [productsArray, setProductsArray] = React.useState([])


  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProductsArray(data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once
  
  console.log(productsArray)

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Hero />
    <Container>
      <Box></Box>
      <Grid container spacing ={2} >{
      productsArray.map((product)=>{
        return <TourCard
                key={product.id} 
                title={product.title}
                thumbnail={product.thumbnail}
                price={product.price}
                description={product.description}
                rating={product.rating}
        />
      })
    }
      </Grid>
     </Container>
    
    </ThemeProvider>
    
  );
}
