import { Box, Container, Stack, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';

export default function Hero() {
  const theme = useTheme();
  return (
    <Container>
      <Grid container spacing={2}>
        {/* Main Image */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Paper
            sx={{
              backgroundImage: `url("https://t3.ftcdn.net/jpg/06/75/17/10/240_F_675171063_zeMBuENAHa8flGmsChM03sloAIT8J8pw.jpg")`,
              backgroundSize: "cover",
              height: 400,
              borderRadius: "10px",
              marginBottom: "10px"
            }}>
           <Box p={2} sx={{maxWidth: "100%"}} >
           <Typography variant="h3" mb={2} sx={{color: "white", fontWeight: "bold", marginTop: "70px", width: "50%"}}>
                Discover the <span style={{ fontWeight: 'bold', color: theme.palette.secondary.main }}>Latest Trends </span>
              </Typography>
              <Typography variant="body1" sx={{color: "gray"}}>
                Shop our collection of premium products.  
              </Typography>
            </Box>    
          </Paper>
        </Grid>
        {/* Stack of Images */}
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Stack spacing={2}   direction={{ xs: 'column', sm: 'column', md: "row", lg: "column" }} style={{marginBottom: "20px"}}>
            <Paper sx={{ backgroundColor: "gray", height: 190, borderRadius: "10px" }}>
              <img
                src="https://t4.ftcdn.net/jpg/04/35/69/67/240_F_435696774_e7vLWc20mTSLuasBHz8TIoOM7nsOMesq.jpg"
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            </Paper>
            <Paper sx={{ backgroundColor: "gray", height: 190, borderRadius: "10px" }}>
              <img
                src="https://t4.ftcdn.net/jpg/03/48/05/45/240_F_348054579_rsxfPG9B3LJBzE173cXPJAMuGGmBkmKS.jpg"
                alt=""
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
