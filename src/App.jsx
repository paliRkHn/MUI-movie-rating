import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, Typography, FormControlLabel, Switch } from '@mui/material';
import ButtonAppBar from './components/Navbar';
import MovieCard from './components/Card';
import actionMovies from './components/movies-list/ActionMovies';
import { ThemeProvider } from '@emotion/react';

function App(){
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#2d2062',
        light: '#656798'
      },
      secondary: {
        main: '#9668b4'
      },
      background: '#171033',
      text: {
        primary: '#ffffff',
        secondary: '#000000',
      }
    },
    typography: {
      fontFamily: 'Trebuchet MS, sans-serif'
    }
  })

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: '#2d2062',
        light: '#9395b7'
      },
      secondary: {
        main: '#a27db6'
      },
      background: '#ffffff',
      text: {
        primary: '#000000',
        secondary: '#ffffff',
      }
    },
    typography: {
      fontFamily: 'Trebuchet MS, sans-serif'
    }
  })

  const [isDark, setTheme] = useState('light');

  const selectTheme = () => {
    setTheme(prevMode => prevMode === 'light' ? 'dark': 'light')
  };

  const theme = isDark === 'light' ? lightTheme : darkTheme;
  
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ top: 0, left: 0, pb: 3, backgroundColor: 'background'}}>
        <Grid container spacing={3} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Grid size={12}>
            <ButtonAppBar />
          </Grid>
          <Grid size={9}>
            <Typography variant='h3' sx={{ pl: '3rem', pt: 1, color: 'text.primary' }}>
              Movies about...
            </Typography>
          </Grid>
          <Grid container size={3}  sx={{ justifyContent: 'right', alignSelf: 'flex-start'}}>
            <FormControlLabel label="Dark Mode"  sx={{ color: 'text.primary'}} control={
              <Switch color='secondary' checked={isDark === "dark"} onChange={selectTheme}/>
            } 
            />
          </Grid>
          <Grid size={8}>
            <Paper elevation={3} sx={{ backgroundColor: 'secondary.main', borderRadius: 3, mb: '1rem'}}>
              <Typography variant='h2' sx={{ display: 'flex', justifyContent:'center', py: 2}}>
                Badass people and guns
              </Typography>
            </Paper>
          </Grid>
          
          <Grid container justifyContent={'center'} sx={{ px: 2}}>
            {actionMovies.map((movie, i) => (
              <Grid item key={i} size={{ md:3, sm:4, xs:8  }}>
                <MovieCard {...movie} />
              </Grid>
            ))} 
          </Grid>
          <Grid size={{ md:5, xs:8 }}>
            <Paper elevation={10} sx={{ mx: 2, my: 1, px: 8, py: 4, backgroundColor: 'primary.main'}}>
              <Typography variant='h6' sx={{textAlign: 'center', color: 'white'}}>
                Give your rate to some of my favorite movies. 
                <Typography variant='body1' sx={{ pt: "1rem", pb: '2rem'}}>(These are all 5 stars for me anyways 🤩)</Typography>
                xoxo
                <br />
                Paloma
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App;
