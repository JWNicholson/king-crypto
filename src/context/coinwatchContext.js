import React, { createContext, useState } from 'react';

export const CoinWatchContext = createContext();

export const CoinWatchContextProvider = props => {
    const [coinWatch, setCoinWatch] = useState(["bitcoin", "tether", "ethereum"]);

    const deleteCoin = (coin) => {
        setCoinWatch(coinWatch.filter(el => {
            return el !== coin;
        }));
    }

    return(
        <CoinWatchContext.Provider value={{coinWatch,deleteCoin}}>
            {props.children}
        </CoinWatchContext.Provider>
    );
}
