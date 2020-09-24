import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	root : {
		justifyContent  : 'space-between',
		flexGrow        : 1,
		margin          : '28px 0',
		padding         : '18px',
		backgroundColor : '#f5f5f5',
		borderRadius    : '4px'
	}
}));

const CoinData = ({ data }) => {
	const classes = useStyles();

	const renderData = () => {

		if (data) {
			return (
				<Grid container className={classes.root}>
					<Grid item xs={12} sm={4}>
						<Typography variant="h6">Market Cap</Typography>
						<Typography>{data.market_cap}</Typography>
						<hr />
						<Typography variant="h6">Volume 24HR</Typography>
						<Typography>{data.total_volume}</Typography>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Typography variant="h6">Total Supply</Typography>
						<Typography>{data.total_supply}</Typography>
						<hr />
						<Typography variant="h6">High 24HR</Typography>
						<Typography>{data.high_24h}</Typography>
					</Grid>

					<Grid item xs={12} sm={4}>
						<Typography variant="h6">Circulating Supply</Typography>
						<Typography>{data.circulating_supply}</Typography>
						<hr />
						<Typography variant="h6">Low 24HR</Typography>
						<Typography>{data.low_24h}</Typography>
					</Grid>
				</Grid>
			);
		}
	};
	return <div>{renderData()}</div>;
};

export default CoinData;
