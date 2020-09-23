import React, { createContext, useState } from 'react';

export const CoinWatchContext = createContext();

export const CoinWatchContextProvider = props => {
    const [coinWatch, setCoinWatch] = useState(["bitcoin", "tether", "ethereum"]);

    return(
        <CoinWatchContext.Provider value={{coinWatch}}>
            {props.children}
        </CoinWatchContext.Provider>
    )
}
