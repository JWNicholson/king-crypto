import React from 'react';
import AddCoins from '../components/AddCoins/AddCoins';
import CoinList from '../components/CoinList/CoinList';
import { makeStyles } from '@material-ui/styles';


const coinSynopsis = () => {
    return (
        <div className="synopsisWrapper">
           <AddCoins />
           <CoinList />
        </div>
    )
}

export default coinSynopsis;
