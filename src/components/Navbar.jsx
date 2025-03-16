import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { ThemeModeContext } from './Themes';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { List, ListItem, ListItemText, useMediaQuery } from '@mui/material';


export default function Navbar() {
  
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  }

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main'}}>
      <AppBar position="static"  >
        <Toolbar>
          {isMobile ? (
          <>
        < IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} sx={{ backgroundColor: 'primary.light'}}>
            <Box sx={{ width: "100%", pr: '2rem' }} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}  >
            <List sx={{pl: '2rem', mt: '3rem'}}>
              <ListItem button component={Link} to='/' sx={{ '&:hover': { backgroundColor:'secondary.main' } }} >
                <ListItemText primary="Home" sx={{color: 'text.primary'}} />
              </ListItem>
              <ListItem button component={Link} to='/action' sx={{ '&:hover': { backgroundColor:'secondary.main' } }} >
                <ListItemText primary="Action" sx={{color: 'text.primary'}} />
              </ListItem>
              <ListItem button component={Link} to='/anime' sx={{ '&:hover': { backgroundColor:'secondary.main' } }} >
                <ListItemText primary="Animation" sx={{color: 'text.primary'}} />
              </ListItem>
              <ListItem button component={Link} to='/scifi' sx={{ '&:hover': { backgroundColor:'secondary.main' } }} >
                <ListItemText primary="Sci-Fi" sx={{color: 'text.primary'}} />
              </ListItem>
            </List>
            </Box>
          </Drawer>
          </>
          ) : (
            <>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ px: "3rem" }}>
            Home
          </Typography></Link>
          <Link to="/action" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ px: "3rem"  }}>
            Action
          </Typography></Link>
          <Link to="/anime" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ px: "3rem"  }}>
            Animation
          </Typography></Link>
          <Link to="/scifi" style={{ textDecoration: 'none', color: 'inherit' }}><Typography variant="h6" component="div" sx={{ px: "3rem"  }}>
            Sci-Fi
          </Typography></Link>
            </> 
          )}
          <Stack direction="row" spacing={1} sx={{ ml: "auto", px: "3rem", alignItems: 'center' }}>
            <LightModeTwoToneIcon color="inherit" />
            <Switch color='secondary' checked={theme.palette.mode === 'dark'} onChange={colorMode.switchColorMode}/>
            <DarkModeTwoToneIcon color="inherit" />
          </Stack>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
