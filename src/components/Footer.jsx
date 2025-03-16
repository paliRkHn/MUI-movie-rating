import React from "react";
import Box from "@mui/material/Box";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Typography from "@mui/material/Typography";

function Footer () {
    return (
        <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', mt: 'auto'}}>
            <Typography>Join the community</Typography>
            <CopyrightIcon />
            <Typography> Paloma R. 2025</Typography>
        </Box>
    )
}

export default Footer;