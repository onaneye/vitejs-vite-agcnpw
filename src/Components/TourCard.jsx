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

export default function TourCard() {
  const theme = useTheme(); // Access the theme object

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={2} sx={{ height: 1 }}>
        <Button size="small" sx={{ margin: "10px", backgroundColor: theme.palette.primary.main, color:"black", textTransform: "capitalize" }}>Newest seller</Button>
        <img src="https://media.istockphoto.com/id/123500558/photo/rolled-up-bath-towels.webp?b=1&s=170667a&w=0&k=20&c=yWXAynPWrKHVOyPoUd1zRxVQIT3tJwqtny5pzC_4LoI=" alt="unsplash" />
        <Box paddingX={1}>
          <Typography variant='h6' component="h5">Wireless Bluetooth Headset</Typography>
          <Typography variant='subtitle1' component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          <Rating name="read-only" value={4} readOnly />
        </Box>

        <Box paddingX={1}>
          <Typography variant='body2' component="p" sx={{ color: "gray" }}>Shipped in 34 Days</Typography>
          <Typography fontWeight="bold" variant='subtitle1' component="h3">$10.55</Typography>
          <Stack direction="row" spacing={2} sx={{ marginBottom: "13px",  justifyContent: "center" }}>
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
