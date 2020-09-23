import React, { useEffect,useState, useContext } from 'react';
import coinApi from '../../api/coinApi';
import { CoinWatchContext } from '../../context/coinwatchContext';
import { Grid, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Coin from '../Coin/Coin';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    coinList: {

    }
    },
  }));


const CoinList = () => {
    const classes = useStyles();
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //destructure from context
    const { coinWatch } = useContext(CoinWatchContext);
    console.log(coinWatch)

    useEffect(() => {
        const getCoinData = async () => {
            setIsLoading(true);
            const response = await coinApi.get("/coins/markets",{
                 //parameters from api docs
                 params: {
                     vs_currency: "usd",
                     //join array data with a comma between elements
                     ids:coinWatch.join(","),
                 }
            });
            //console.log(response.data);
            setCoins(response.data);
            //reset isLoading
            setIsLoading(false);
        }
        getCoinData();
       
    }, []);

    const renderCoins = () => {     
            if(isLoading) {
                return (
                    <div className={classes.root}>
                    <CircularProgress color="secondary"/>
                    </div>
                )};



                return (
                <Grid
                    className={classes.coinList}
                    container
                    direction="column"
                    justifycontent="space-around">
                        {coins.map(coin => {
                            return (
                                <Coin 
                                    key={coin.id}
                                    coin={coin}    
                                />
                            );
                           
                        })}
                </Grid>
                );
                   
      
    }


    return (
        <div>
           {renderCoins()}
        </div>
    )
}

export default CoinList;
