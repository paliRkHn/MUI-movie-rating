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
import { ThemeModeContext } from './Themes';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';


export default function Navbar() {
  
  const theme = useTheme();
  const colorMode = useContext(ThemeModeContext);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'primary.main'}}>
      <AppBar position="static"  >
        <Toolbar>
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
