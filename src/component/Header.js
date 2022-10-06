import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg'


const drawerWidth = 240;
const navItems = ['Inspirations', 'All Products', 'Apparel', 'Home & Living', 'Accessories'];

function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="Header"> 
        <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" style={{ backgroundColor : '#fff' }} position={'relative'}>
            <Toolbar>
            <IconButton style={{ flexGrow : 1}}
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Box style={{ flexGrow : 1, textAlign : 'left', filter : 'invert(0)' }}>
                <img src={logo} style={{ height : 50, color : '#fff' } } />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow : 1 }}>
                {navItems.map((item) => (
                <Button key={item} sx={{ color: '#000', textTransform : 'capitalize', fontWeight : '500', fontSize : 16 }}>
                    {item}
                </Button>
                ))}
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow : 1 , textAlign : 'right' }}>
                <Button sx={{ color: '#000', marginRight: 2, textTransform : 'capitalize', fontWeight : '500' }}>
                    Login
                </Button>
                <Button sx={{ color: '#000', textTransform : 'capitalize', fontWeight : '500' }}   className='header_button'>
                    Get Started
                </Button>
            </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            </Box>
        </Box>
    </div>
  );
}

export default Header;
