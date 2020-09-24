import React from 'react';
import { Link } from 'react-router-dom';
import { ImCircleDown, ImCircleUp } from 'react-icons/im';
import {Box, Grid, makeStyles, Paper, Typography,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        background:"#f8f8ff",
        color:"#141414",
        maxWidth:"900px",
        margin:"auto",
        marginTop:theme.spacing(2),
        borderRadius:"4px",
        alignContent:"baseline",
        justifyContent:"flex-start"
    },
   contentWrapper:{
    display:"flex",
    flexFlow:"row no-wrap",
    // justifyContent:"flex-start",
    // alignContent:"center",
    maxWidth:'900px',
    padding:theme.spacing(1),
   },
   coinlistImage:{
       height:"60px",
       width:"auto",
       marginRight:theme.spacing(2),
   },
   coinImageContainer:{
        marginRight:theme.spacing(2),

   },
    currentPriceBox: {
      color:"#141414",
      marginRight:theme.spacing(2),
    },
    currentPercentage:{
        marginRight:"0",
    },
    percentageArrow:{
        marginRight:theme.spacing(1),
    }
}));

const Coin = ({coin}) => {
    const classes = useStyles();

    return (
        
            
        <Grid container xs={6}  className={classes.root} display="flex" flexDirection="row" >
          <Link to={"/styx"} >
            <Box xs={12} className={classes.contentWrapper} >
                <Grid xs={4} item justifyContent="center" alignContent="center" className={classes.coinImageContainer}>
                <img className={classes.coinlistImage} src={coin.image} alt="coin logo" />
                </Grid>
                
                <Grid item
                    xs={4}
                    className={classes.currentPriceBox}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                >
                    <Typography ><strong>Current Price</strong></Typography>
                    <Typography>{coin.current_price}</Typography>
                </Grid>
                
                <Grid item xs={4} >
                    <Box 
                        className={classes.currentPercentage}
                        color={coin.price_change_percentage_24h < 0 ? "error.main" : "success.dark"}>
                    {coin.price_change_percentage_24h < 0 ?   
                <ImCircleDown className={classes.percentageArrow} /> : <ImCircleUp className={classes.percentageArrow}  />} 
                {coin.price_change_percentage_24h}
                 </Box>
                </Grid>

            </Box>
          </Link>
        </Grid>
           
        
    );
}

export default Coin;
