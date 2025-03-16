// eslint-disable-next-line no-unused-vars
import React from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import MovieCard from './Card';
import scifiMovies from './movies-list/SciFiMovies';

function SciFiPage() {

  return(

<Box sx={{ top: 0, left: 0, px: 6, pb: 12, backgroundColor: 'background'}}>
  <Grid container spacing={4} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Grid size={9}>
      <Typography variant='h4' align='center' sx={{ pl: '3rem', pt: 8, color: 'text.primary'}}>
        SCIENCE FICTION or...
      </Typography>
    </Grid>
    <Grid size={8}>
      <Typography variant='h2' sx={{ display: 'flex', justifyContent:'center', pb: 8,  color: 'text.primary', textAlign: 'center' }}>
        Multiverse of Humans and Others
      </Typography>
    </Grid>
    
    <Grid container justifyContent={'center'} sx={{ px: 2}}>
      {scifiMovies.map((movie, i) => (
        <Grid item key={i} size={{ md:3, sm:4, xs:8  }}>
          <MovieCard {...movie} />
        </Grid>
      ))} 
    </Grid>
    <Button variant="contained" color="secondary" sx={{ mt: 4, mb: 2, mx: 'auto', display: 'block', fontSize: '1.3rem' }}>Submit</Button>
  </Grid>
</Box>
)};

export default SciFiPage;