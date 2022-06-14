import React from 'react';
import AddCoins from '../components/AddCoins/AddCoins';
import CoinList from '../components/CoinList/CoinList';




const coinSynopsis = () => {
    
    return (
        <div className="synopsysWrapper">
           <AddCoins />
           <CoinList />
        </div>
    );
}

export default coinSynopsis;
