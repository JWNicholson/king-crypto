# King Crypto
King Crypto is a crypto currency tracking app. Using Coin Gecko's API, you can see current and historical data for selected currencies.The landing page shows a default 3 coins. You can add more with the dropdown select. The list is hard-coded rather than dynamically, as there are around 1,000 coins. You can also delete coins. There is a safety feature which prevents you from adding a coin that is already in the least. This is accomlished by checking the users coin selection's index to see if it is already there.

Due to time restraints the app is designed with only iPhone screen sizes in mind. I wasn't concerned with design, just funcitionality.

![app-example](https://github.com/JWNicholson/king-crypto/blob/master/assets/King_Crypto-screenshots-md.png?raw=true)

## WHY?
I needed to get a handle on making asynchronous api requsets,and in particulary ones whose functionality depends on a different request's information. I decided to use React's useContext hook for data that was shared or relied on previous api calls. Redux seemed a little much for this app in it's current state.

## Build Status
Working app, open to additional features. 

## The Context code
```
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
  ```

###### Tech Stack
- React js 
- Create React App
- HTML5
- CSS3
- Flexbox via Material UI

###### Dependencies
- React Router
- React Multi Select Component
- Axios
- Chart.js

###### Style Guide:
- body background,font -  #141414
- main background, h1 text-shadow - #bce4e2 ||rgb(188, 228, 226)
- content background - #f5f5f5
- h1 - #a67c00
- borders - #778899
- font -Roboto
- border radius 6px;

###### Notes & Attributions
- https://blockgeeks.com/guides/what-is-cryptocurrency/
- https://finbold.com/guide/best-crypto-data-portals-to-master-bitcoin-and-cryptocurrencies/
