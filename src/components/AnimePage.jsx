import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import MovieCard from './Card';
import animationMovies from './movies-list/AnimationMovies';

function AnimePage() {

  return(

<Box sx={{ top: 0, left: 0, pb: 3, backgroundColor: 'background'}}>
  <Grid container spacing={3} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Grid size={9}>
      <Typography variant='h3' sx={{ pl: '3rem', pt: 1, color: 'text.primary' }}>
        ACTION or...
      </Typography>
    </Grid>
    <Grid size={8}>
      <Paper elevation={3} sx={{ backgroundColor: 'secondary.main', borderRadius: 3, mb: '1rem'}}>
        <Typography variant='h2' sx={{ display: 'flex', justifyContent:'center', py: 2}}>
          Badass people and Guns
        </Typography>
      </Paper>
    </Grid>
    
    <Grid container justifyContent={'center'} sx={{ px: 2}}>
      {animationMovies.map((movie, i) => (
        <Grid item key={i} size={{ md:3, sm:4, xs:8  }}>
          <MovieCard {...movie} />
        </Grid>
      ))} 
    </Grid>
  </Grid>
</Box>
)};

export default AnimePage;