import React from 'react';
import AddCoins from '../components/AddCoins/AddCoins';
import CoinList from '../components/CoinList/CoinList';

const coinSynopsis = () => {
    return (
        <div>
           <h3>CoinSynopsis</h3>
           <AddCoins />
           <CoinList />
        </div>
    )
}

export default coinSynopsis;
