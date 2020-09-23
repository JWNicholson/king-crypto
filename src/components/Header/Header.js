import React from 'react';
import {  Box, Typography } from '@material-ui/core';


const Header = () => {
    return (
        <header>
            <Box 
                display="flex"
                justifyContent="center"   
            >
                <a href="/">
                    <Typography variant="h3" component="h1">
                        King Crypto
                    </Typography>
                </a>
            </Box>
        </header>
    )
}

export default Header;
