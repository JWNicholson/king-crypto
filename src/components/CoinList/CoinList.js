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
    const { coinWatch,deleteCoin } = useContext(CoinWatchContext);
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

        if (coinWatch.length > 0){
            getCoinData();
        }else setCoins([]);//reset or one coin will remain on page when deleting coins because when the array is empty, watchList doesn't trigger useEffect, so screen doesnt't update
       
    }, [coinWatch]);//re-run when watchList updates, like when deleting or adding a coin

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
                                    deleteCoin={deleteCoin}    
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
