import React from 'react';
import { Link } from 'react-router-dom';
import {  Box, Typography, makeStyles } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';



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
                justifyContent="space-evenly"   
            >
               
                <HomeOutlinedIcon />
               
            <Typography  variant="h4" component="h1" gutterBottom>
               King Crypto
           </Typography>
           
            </Box>
        </header>
    )
}

export default Header;
