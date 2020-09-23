import React from 'react';
import { Link } from 'react-router-dom';
import {Grid, makeStyles, Paper,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    mainWrapper: {
        background:"#f8f8ff",
        color:"#141414",
        maxWidth:"900px",
        margin:"auto",
        marginTop:theme.spacing(2),
        borderRadius:"4px",
    },
}));

const Coin = ({coin}) => {
    const classes = useStyles();

    return (
        
            
        <Grid container xs={12} className={classes.mainWrapper} >
          <Link to={"/"} >
            <Paper >
                <img className="coinlist-image" src={coin.image} alt="coin logo" />
            </Paper>
          </Link>
        </Grid>
           
        
    )
}

export default Coin;
