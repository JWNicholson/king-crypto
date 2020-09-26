import React from 'react';
import { Box, Card,CardContent,Grid,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(()=> ({
    root:{
        marginTop:"2rem"
    },
    content: {
        flex: '1 0 auto',
        
      },

      details: {
          display:"flex",
          flexFlow:"row wrap",
          alignItems:"baseline",
      },

      coinImg:{
          margin:"1rem",
      },

      contentBox:{
          display:"flex",
          flexFlow:"column nowrap",
          alignItems:"flex-start",
          width:"90%",
          margin: "auto",
      },
      contentBox2:{
        display:"flex",
        flexFlow:"row nowrap",
         color:"green",
      },
      deletIconBox:{
          color:"red",
          display:"flex", 
      },

 
}))
const CoinData = ({ data }) => {
	const classes = useStyles();

	const renderData = () => {

		if (data) {
			return (

				<Card className={classes.root} variant="outlined"  >
				<Box className={classes.details}>
	  
				<CardContent className={classes.content}  >
					<Box className={classes.coinImgBox}>
					<Typography className={classes.coinImg}>Coin Image</Typography>
					</Box>
				</CardContent>
				
				<CardContent className={classes.content}  >
					<Box className={classes.contentBox}>
					<Typography className={classes.contentBoxData}>Current Price</Typography>
					<Typography className={classes.contentBoxData}>0000000</Typography>
					</Box>
				</CardContent>
	  
				<CardContent className={classes.content}   >
				<Box className={classes.contentBox2}>
					<Typography><span>^</span> Up or Dwn</Typography>
					</Box>
				</CardContent>
				
	  
				<CardContent className={classes.content}   >
					<Box className={classes.deletIconBox}>
					<Typography>Big x</Typography>
					</Box>
				</CardContent>
				
				</Box>
	  
			</Card>


				// <Grid container className={classes.root}>
				// 	<Grid item xs={12} sm={4}>
				// 		<Typography variant="h6">Market Cap</Typography>
				// 		<Typography>{data.market_cap}</Typography>
				// 		<hr />
				// 		<Typography variant="h6">Volume 24HR</Typography>
				// 		<Typography>{data.total_volume}</Typography>
				// 	</Grid>

				// 	<Grid item xs={12} sm={4}>
				// 		<Typography variant="h6">Total Supply</Typography>
				// 		<Typography>{data.total_supply}</Typography>
				// 		<hr />
				// 		<Typography variant="h6">High 24HR</Typography>
				// 		<Typography>{data.high_24h}</Typography>
				// 	</Grid>

				// 	<Grid item xs={12} sm={4}>
				// 		<Typography variant="h6">Circulating Supply</Typography>
				// 		<Typography>{data.circulating_supply}</Typography>
				// 		<hr />
				// 		<Typography variant="h6">Low 24HR</Typography>
				// 		<Typography>{data.low_24h}</Typography>
				// 	</Grid>
				// </Grid>
			);
		}
	};
	return <div>{renderData()}</div>;
};

export default CoinData;
