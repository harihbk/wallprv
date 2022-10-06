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
import Header from './Header';

export default function Appbar() {
  return (
    <>
      <Box >
          <Header />
      </Box>

      <Grid container >
        <Grid item md={3}> <Leftside /> </Grid>
        <Grid item md={9}>  <Rightside /> </Grid>
      </Grid>
    </>
  )
}
