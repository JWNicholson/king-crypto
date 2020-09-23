import React, { useEffect,useState } from 'react';
import coinApi from '../../api/coinApi';

const CoinList = () => {
    const[coins, setCoins] = useState([]);

    useEffect(() => {
        
        const getCoinData = async () => {
            const response = await coinApi.get("/coins/markets",{
                 //parameters from api docs
                 params: {
                     vs_currency: "usd",
                     //join array data with a comma between elements
                     ids:"bitcoin,tether,ethereum"
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
