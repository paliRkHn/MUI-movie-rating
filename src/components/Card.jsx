import React, { useState } from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Rating } from "@mui/material";

function MovieCard ({image, title, name, release, director, starred}){

    const [value, setValue] = React.useState(0);

    return(
        <Card variant="outlined" sx={{ backgroundColor: 'primary.light' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'center', color: 'text' }}>
              <Typography variant='h5'>
                <b>{name}</b>
              </Typography>
            </CardContent>
            <CardActionArea>
                <Box sx={{ display: 'flex', justifyContent: 'center', '& > legend': { mt: 2 } }}>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                </Box>
            </CardActionArea>
            <CardMedia
                sx={{ mt: 2, height: '300px', width: '100%', maxWidth: '100%', objectFit: 'contain' }}
                component="img"
                image={image}
                title={title}
            />
            <CardContent sx={{ color: 'text'}}>
              <Typography variant='body1'>
                <b>Released:</b> {release}
              </Typography>
              <Typography variant='body1'>
                <b>Directed:</b> {director}
              </Typography>
              <Typography variant='body1'>
                <b>Starred:</b> {starred}
              </Typography>
            </CardContent>
        </Card>
    )
}

export default MovieCard;