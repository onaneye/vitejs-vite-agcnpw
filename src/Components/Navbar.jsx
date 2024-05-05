import * as React from 'react';
import DrawerComp from './DrawerComp';
import AppBar from '@mui/material/AppBar';
import {Box, Toolbar, Tabs, Tab, Typography, useMediaQuery, useTheme} from '@mui/material/';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const pages = ['Products', 'Pricing', 'Blog'];


function ResponsiveAppBar() {
  const [navActive, setNavActive]= React.useState(0);
  const theme = useTheme()
  const isMatched = useMediaQuery(theme.breakpoints.down("md"))

  return (
   <Box sx={{marginBottom: {xs: "20%", md: "10%", xl: "50%"}}}>
      <AppBar sx={{backgroundColor: "white"}}>
        <Toolbar>

          {/* A conditioning rendering that is for the responsiveness of the navbar */}
          {
            isMatched ? ( 
              <>
              <Typography sx={{marginRight: "auto"}}>LOGO</Typography>
              <DrawerComp/>
              </>
            ):
            (
              <>
                <Typography>LOGO</Typography>
                <Tabs sx={{margin: "auto"}} indicatorColor='secondary' value={navActive} onChange={(event, navActive)=> setNavActive(navActive) }>
                  {pages.map((page, index)=>{
                    return <Tab sx={{padding: "10px"}} key={index} label={page}/>
                  })}
               </Tabs>
                <ShoppingBagOutlinedIcon  />
             </>
            )
          }
       
        
          
        </Toolbar>
      </AppBar>
   </Box>
  
  );
}
export default ResponsiveAppBar;
