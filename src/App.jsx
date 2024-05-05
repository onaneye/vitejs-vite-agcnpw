import React from 'react';
import "./App.css"
import TourCard from "./Components/TourCard"
import Navbar from "./Components/Navbar"
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
 

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    <Container>
      <Box></Box>
      <Grid container spacing ={2}>
      <TourCard />
      <TourCard />
      <TourCard />
      </Grid>
     </Container>
    
    </ThemeProvider>
    
  );
}
