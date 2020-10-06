import React, { useState,useContext } from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import { CoinWatchContext } from '../../context/coinwatchContext';

const useStyles = makeStyles((theme) => ({
	selectWrapper: {
        width: '280px',
        marginBottom:"0",
        margin: theme.spacing(2),
        padding: theme.spacing(1)
    }
	
}));


const AddCoins = () => {
    const classes = useStyles();
    //use context and destructure out addCoin()
    const{addCoin} = useContext(CoinWatchContext);
       
        const [selectOptions] = useState([
        {value: "algorand", label: "Algorand"},
        {value: "bitcoin", label: "Bitcoin"},
        {value: "bitcoin-cash", label: "Bitcoin-Cash"},
        {value: "billetcoin", label: "Billetcoin"},
        {value: "bitwhite", label: "BitWhite"},
        {value: "eos", label: "Eos"},
        {value: "ethereum", label: "Ethereum"},
        {value: "litecoin", label: "Litecoin"},
        {value: "monero", label: "Monero"},
        {value: "ripple", label: "Ripple"},
        {value: "tether", label: "Tether"}, 
        {value: "tezos", label: "Tezos"},
    ]);

 function handleChange(e){
    addCoin(e.target.value)
 }

 

    return (
        
        <Grid container justify="center" >
            <div className={classes.selectWrapper} >
              
            <select onChange={handleChange}>
                {selectOptions.map(({value, label}) => (
                    <option 
                        key={value}
                        value={value}
                    >
                        {label}
                    </option>
                ))}
            </select>
            </div>  
          
        </Grid>

    )
}

export default AddCoins;
