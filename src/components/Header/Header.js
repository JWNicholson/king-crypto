import React from 'react';
import {  Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    header:{
        marginTop:theme.spacing(2),
        color:"#a67c00",
        
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <Box 
                display="flex"
                justifyContent="center"   
            >
            <Typography  variant="h3" component="h1" gutterBottom>
               King Crypto
           </Typography>  
            </Box>
        </header>
    )
}

export default Header;
