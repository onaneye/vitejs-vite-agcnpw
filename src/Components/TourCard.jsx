import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';

export default function TourCard(props) {
  const theme = useTheme(); // Access the theme object

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={0} sx={{ elevation:{xs:2, md: 0, lg: 0}, height: "100%" }}>
        {/* <Button size="small" sx={{ margin: "10px", backgroundColor: theme.palette.primary.main, color:"black", textTransform: "capitalize" }}>Newest seller</Button> */}
        <img src={props.thumbnail} alt="unsplash" style={{height:200, objectFit: 'cover'}} />
        <Box paddingX={1}>
          <Typography variant='h6' component="h5" sx={{textTransform: "capitalize"}}>{props.title}</Typography>
          <Typography variant='subtitle1' component="p">{props.description}</Typography>
          <Rating name="read-only" value={props.rating} readOnly precision={0.5}/>
        </Box>

        <Box paddingX={1}>
          <Typography variant='body2' component="p" sx={{ color: "gray" }}>Shipped in 34 Days</Typography>
          <Typography fontWeight="bold" variant='subtitle1' component="h3">${props.price}</Typography>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "13px"}}>
            <Button  startIcon={<AddShoppingCart />} size="large" padding={2}  sx={{padding: 2, textTransform: "capitalize", backgroundColor:"#efefef", color: "gray" }}>
              Add Cart
            </Button>
            <Button variant="contained" color="secondary" startIcon={<ShoppingBagOutlinedIcon  />} size='large' sx={{ textTransform: "capitalize" }}>
              Buy
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Grid>
  );
}
