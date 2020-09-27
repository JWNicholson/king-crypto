import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "2rem"
	},
	content: {
		flex: '1 0 auto',
	},

	dataCard:{
		width:"100%",
		marginTop:"1rem",
	},

	details: {
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "baseline",
	},

	coinImg: {
		margin: "0.25rem",
	},

	contentBox: {
		display: "flex",
		flexFlow: "column nowrap",
		alignItems: "flex-start",
		width: "90%",
		margin: "auto",
	},
	contentBox2: {
		display: "flex",
		flexFlow: "row nowrap",
		color: "green",
	},
	deletIconBox: {
		color: "red",
		display: "flex",
	},
}));
const CoinData = ({ data }) => {
	const classes = useStyles();

	const renderData = () => {

		if (data) {
			return (

				<Card className={classes.root} >
				<Box className={classes.details}>

					<Card className={classes.dataCard}>
						<CardContent borderBottom={1} >
							<Typography variant="h6">Market Cap</Typography>
							<Typography>{data.market_cap}</Typography>
						</CardContent>
						</Card>

						<Card className={classes.dataCard}>
						<CardContent borderBottom={1}  >
							<Typography variant="h6">Volume</Typography>
							<Typography>{data.total_volume}</Typography>
						</CardContent>
						</Card>
						

						<Card className={classes.dataCard}>
						<CardContent borderBottom={1}  >
							<Typography variant="h6">Total Supply</Typography>
							<Typography>{data.total_supply}</Typography>
						</CardContent>
						</Card>


						<Card className={classes.dataCard}>
						<CardContent borderBottom={1}  >
							<Typography variant="h6">High 24HR</Typography>
							<Typography>{data.high_24h}</Typography>
						</CardContent>
						</Card>

						<Card className={classes.dataCard}>
						<CardContent borderBottom={1}  >
							<Typography variant="h6">Circulating Supply</Typography>
							<Typography>{data.circulating_supply}</Typography>
						</CardContent>
						</Card>

						<Card className={classes.dataCard}>
						<CardContent borderBottom={1}  >
							<Typography variant="h6">Low 24HR</Typography>
							<Typography>{data.low_24h}</Typography>
						</CardContent>
						</Card>
					</Box>
				</Card>
			);
		}
	};
	return <div>{renderData()}</div>;
};

export default CoinData;
