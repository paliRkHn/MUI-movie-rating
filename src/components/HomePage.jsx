// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";
import actionPic from '../assets/actionpic.jpg';
import animePic from '../assets/animepic.jpg';
import scifiPic from '../assets/scifipic.jpg';

function Home() {
    const CategoryCard = ({ imgSrc, imgAlt, category }) => {
        let cardText;
        if (Array.isArray(category)) {
            // If category is an array, join with line breaks
            cardText = category.map((line, i) => (
                <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line}
                </React.Fragment>
            ));
        } else {
            // If category is a simple string, display as is
            cardText = category;
        }
        
        const [hovered, setHovered] = React.useState(false);
        
        return(
            <div className="category-card" style={{position: 'relative', background: "white", border: "8px solid #9668b4"}} 
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
                <img className="category-image" src={imgSrc} alt={imgAlt} style={{ width: '100%', height: 'auto', opacity: hovered ? 1 : 0.5, transition: 'opacity 0.2s ease-in-out'}} />
                <Typography className="category-text" variant="h2" align="center" sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontWeight: 'bold', opacity: hovered ? 0 : 1, transition: 'opacity 0.2s ease-in-out' }}>{cardText}</Typography>
            </div>
        )
    }
    
    return(

    <Box sx={{ top: 0, left: 0, py: 4, backgroundColor: 'background', pb: 15}}>
        <Grid container spacing={3} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Grid size={9} sx={{py: 2}} >
            <Typography variant='h1' align="center" sx={{ pt: 3, color: 'text.primary'}}>
            Community Answers
            </Typography>
        </Grid>
        <Grid size={9}>
            <Typography variant='h4' align="center" sx={{ py: 2, color: 'text.primary'}}>
            These are some of my fav movies!<br />Let me know how you would rate them.
            </Typography>
        </Grid>
        <Grid size={9}>
            <Typography variant='h6' align="center" sx={{ pt: 6, color: 'text.primary'}}>
                Click on a category to start.
            </Typography>
        </Grid>
        
        <Grid container size={12} spacing={12} justifyContent={'center'} sx={{ px: 20}}>        
            <Grid item size={{ md:4, sm:8, xs:8  }}>
            <Link to="/action" style={{ textDecoration: 'none', color: 'inherit' }}><CategoryCard
                    imgSrc={actionPic}
                    imgAlt="Action"
                    category="ACTION"  
                /></Link>
            </Grid>
            <Grid item size={{  md:4, sm:8, xs:8  }}>
                <Link to="/anime" style={{ textDecoration: 'none', color: 'inherit' }}><CategoryCard
                    imgSrc={animePic}
                    imgAlt="Animation"
                    category={["ANI", "MA", "TION"]}
                /></Link>
            </Grid> 
            <Grid item size={{  md:4, sm:8, xs:8  }}>
                <Link to="/scifi" style={{ textDecoration: 'none', color: 'inherit' }}><CategoryCard
                    imgSrc={scifiPic}
                    imgAlt="Science Fiction"
                    category={["SCI", "FI"]}
                /></Link>
            </Grid>         
        </Grid>
        </Grid>
    </Box>
)};
  
  export default Home;