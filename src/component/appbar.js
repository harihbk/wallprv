import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Leftside from './leftside';
import { Grid } from '@mui/material';
import Rightside from './rightside';

export default function Appbar() {
  return (
      <>
    <Box >
    <AppBar position="static" >
      <Toolbar style={{ display : 'flex',justifyItems:'center',alignItems:'center'}}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >   
          <MenuIcon />
        </IconButton>
         <Box style={{ display:'flex' }} >
            <Typography variant="h6" component="div" mr={1}>
                Inspirations
            </Typography>
            <Typography variant="h6" component="div" mr={1}>
                All Products
            </Typography>
            <Typography variant="h6" component="div" mr={1}>
                Apparel
            </Typography>
            <Typography variant="h6" component="div" mr={1}>
                Home & Living
            </Typography>
            <Typography variant="h6" component="div" mr={1}>
                Accessories
            </Typography>
         </Box>
        <Button color="inherit">Search</Button>
      </Toolbar>
    </AppBar>
  </Box>

  <Grid container > 
      <Grid item md={3}> <Leftside /> </Grid>
      <Grid item md={9}>  <Rightside /> </Grid>
  </Grid>
  </>
  )
}
