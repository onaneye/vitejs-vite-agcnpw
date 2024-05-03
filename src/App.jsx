import './App.css';
import { Container, Typography, Box, Grid } from '@mui/material';
import TourCard from './Components/TourCard';

// import ResponsiveAppBar from './Components/Navbar';

function App() {
  // const [Products, setProducts] = React.useState([]);

  // React.useEffect(() => {}, [1]);

  console.log('hello');

  return (
    <>
      <Container>
        {/* <Box>
          <ResponsiveAppBar xs={{ mb: 2 }} />
        </Box> */}
        <Grid container spacing={2}>
          <TourCard />
        </Grid>
      </Container>
    </>
  );
}

export default App;
