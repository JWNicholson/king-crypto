import React from 'react';
import { Link } from 'react-router-dom';
import { ImCircleDown, ImCircleUp } from 'react-icons/im';
import {Box, Grid, makeStyles, Button, Typography,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        background:"#f8f8ff",
        color:"#141414",
        maxWidth:"322px",
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
       marginRight:theme.spacing(1),
   },
   coinImageContainer:{
        marginRight:theme.spacing(1),

   },
    currentPriceBox: {
      color:"#141414",
      marginRight:theme.spacing(1),
    },
    currentPercentageContainer:{
        display:"flex",
    },
    currentPercentage:{
        marginTop:theme.spacing(1),
        marginRight:theme.spacing(1),
    },
    percentageArrow:{
        
        marginRight:theme.spacing(1),
    },
    deleteIconContainer:{
       display:"flex",
       justifyContent:"flex-end",
    },
  
    
}));

const Coin = ({coin,deleteCoin}) => {
    const classes = useStyles();

    return (  
        <Grid   className={classes.root}  >
          <Link to={`/coins/${coin.id}`} >
            <Box xs={12} md={6} className={classes.contentWrapper} >
                <Grid xs={3} item  className={classes.coinImageContainer}>
                <img className={classes.coinlistImage} src={coin.image} alt="coin logo" />
                </Grid>
                <Grid item
                    xs={3}
                    className={classes.currentPriceBox}  
                >
                    <Typography ><strong>Current Price</strong></Typography>
                    <Typography>{coin.current_price}</Typography>
                </Grid>
                <Grid item xs={5} className={classes.currentPercentageContainer}>
                    <Box 
                        className={classes.currentPercentage}
                        color={coin.price_change_percentage_24h < 0 ? "error.main" : "success.dark"}>
                    {coin.price_change_percentage_24h < 0 ?   
                <ImCircleDown className={classes.percentageArrow} /> : <ImCircleUp className={classes.percentageArrow}  />} 
                {coin.price_change_percentage_24h}%
                 </Box>
                </Grid>
                <Grid item xs={1} className={classes.deleteIconContainer}>
                <Typography 
                    onClick={(e) => {
                        e.preventDefault();
                        deleteCoin(coin.id);
                        console.log("Delete clicked")
                    }}
                variant="h4" color="secondary" className={classes.deleteIcon} >&#10008;</Typography>
                </Grid>
            </Box>
          </Link>
        </Grid>
    );
}

export default Coin;
