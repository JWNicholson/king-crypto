import React, { createContext, useState } from 'react';

export const CoinWatchContext = createContext();

export const CoinWatchContextProvider = props => {
    const [coinWatch, setCoinWatch] = useState(["bitcoin", "tether", "ethereum"]);

    const deleteCoin = (coin) => {
        setCoinWatch(coinWatch.filter(el => {
            return el !== coin;
        }));
    }

    const addCoin = (coin) => {
        if (coinWatch.indexOf(coin) === -1){
            setCoinWatch([...coinWatch, coin]);
        }
    }

    return(
        <CoinWatchContext.Provider value={{coinWatch,deleteCoin,addCoin}}>
            {props.children}
        </CoinWatchContext.Provider>
    );
}
