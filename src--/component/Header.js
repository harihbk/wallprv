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
import SearchIcon from '@mui/icons-material/Search';
// import logo from '../assets/logo.svg';
import logo from '../assets/logo.jpg';
import TextField from '@mui/material/TextField';



const drawerWidth = 240;
const navItems = ['Inspirations', 'All Products', 'Apparel', 'Home & Living', 'Accessories'];

function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const changeSearch = () => {
        let chk = searchOpen ? false : true
        setSearchOpen(chk);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <img src={logo} style={{ height: 50, color: '#fff' }} />
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
                <AppBar component="nav" style={{ backgroundColor: '#fff' }} position={'relative'}>
                    <Toolbar>
                        <IconButton style={{ flexGrow: { xs: 1, sm: 0 } }}
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { sm: 'none' } }}
                        >
                            <MenuIcon style={{ color : '#000' }}/>
                        </IconButton>
                        <Box style={{ flexGrow: 1, textAlign: 'center', filter: 'invert(0)' }}>
                            <img src={logo} style={{ height: 50, color: '#fff',  transform: `translateX(70%)` }} />
                        </Box>
                        {/* <Box sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, justifyContent : 'center' }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#000', textTransform: 'capitalize', fontWeight: '500', fontSize: 16 }}>
                                    {item}
                                </Button>
                            ))}
                        </Box> */}
                        <Box sx={{ display: { xs: 'block', sm: 'block' }, width : 300, textAlign: 'right', justifyContent : 'center' }}>
                            {/* <Button sx={{ color: '#000', marginRight: 2, textTransform : 'capitalize', fontWeight : '500' }}>
                    Login
                </Button> */} 
                            <TextField 
                                id="outlined-error"
                                label="Search"
                                defaultValue=""
                                variant="standard"
                                autoFocus
                                style={{ width : searchOpen ? 200 : 0 , transition : '0.51s'}}
                            />
                            <Button onClick={() => changeSearch()}  sx={{ color: '#000', textTransform: 'capitalize', fontWeight: '500', marginTop : 2 }} className='header_button'>
                                <SearchIcon />
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
