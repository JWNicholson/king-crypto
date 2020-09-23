import React, { useEffect,useState, useContext } from 'react';
import coinApi from '../../api/coinApi';
import { CoinWatchContext } from '../../context/coinwatchContext';

const CoinList = () => {
    const [coins, setCoins] = useState([]);
    //destructure from context
    const { coinWatch } = useContext(CoinWatchContext);
    console.log(coinWatch)

    useEffect(() => {
        const getCoinData = async () => {
            const response = await coinApi.get("/coins/markets",{
                 //parameters from api docs
                 params: {
                     vs_currency: "usd",
                     //join array data with a comma between elements
                     ids:coinWatch.join(","),
                 }
            });
            console.log(response.data);
            setCoins(response.data);
        }
        getCoinData();
       
    }, [])


    return (
        <div>
            CoinList
        </div>
    )
}

export default CoinList;
