import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import ButtonAppBar from './components/Navbar';
import MovieCard from './components/Card';
import moviesList from './components/ListMovies';

function App(){
  return (
    <Box sx={{ top: 0, left: 0, mb: 3}}>
      <Grid container spacing={3} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid size={12}>
          <ButtonAppBar />
        </Grid>
        <Grid size={8}>
          <Paper elevation={3} sx={{ backgroundColor: '#afa2d0', borderRadius: 3}}>
            <Typography variant='h2' sx={{ display: 'flex', justifyContent:'center', py: 2}}>
              MUI - Adv Diploma Class
            </Typography>
          </Paper>
        </Grid>
        <Grid size={2}>
          <Button variant="contained" color='secondary'>
            This is a button 😉
          </Button>
        </Grid>
        <Grid container justifyContent={'center'}>
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
  )
}

export default App;
