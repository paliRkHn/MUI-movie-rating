import React, { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, Typography, FormControlLabel, Switch } from '@mui/material';
import ButtonAppBar from './components/Navbar';
import MovieCard from './components/Card';
import moviesList from './components/ListMovies';
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
            <Paper elevation={3} sx={{ backgroundColor: 'secondary.main', borderRadius: 3}}>
              <Typography variant='h2' sx={{ display: 'flex', justifyContent:'center', py: 2}}>
                MUI - Adv Diploma Class
              </Typography>
            </Paper>
          </Grid>
          <Grid container size={3}  sx={{ justifyContent: 'right', alignSelf: 'flex-start'}}>
            <FormControlLabel label="Dark Mode"  sx={{ color: 'text.primary'}} control={
              <Switch color='secondary' checked={isDark === "dark"} onChange={selectTheme}/>
            } 
            />
          </Grid>
          <Grid container justifyContent={'center'} sx={{ px: 2}}>
            {moviesList.map((movie, i) => (
              <Grid item key={i} size={{ md:3, sm:4, xs:8  }}>
                <MovieCard {...movie} />
              </Grid>
            ))} 
          </Grid>
          <Grid size={{ md:4, xs:8 }}>
            <Paper elevation={10} sx={{ mx: 2, px: 8, py: 4, backgroundColor: '#604ac3'}}>
              <Typography variant='h6' sx={{textAlign: 'center', color: 'white'}}>
                Rate some of my favorite movies about guns and badass people. 
                <br /><br />
                xoxo
                <br />
                Paloma
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ md:4, xs:8 }}>
            <Paper elevation={10} sx={{ mx: 2, px: 6, py: 3, backgroundColor: '#848c8c', borderStyle: 'dashed', borderRadius: 15}}>
              <Typography variant='body1' sx={{textAlign: 'center'}}>
                These are all 5 stars for me anyways 🤩
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default App;
