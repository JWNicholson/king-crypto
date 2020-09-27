import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container, makeStyles } from '@material-ui/core';
import Header from '../src/components/Header/Header';
import CoinSynopsis from '../src/pages/CoinSynopsis';
import CoinSpecifics from './pages/CoinSpecifics';
import { CoinWatchContextProvider } from './context/coinwatchContext';


const useStyles = makeStyles((theme) => ({
//  Container:{
//    border:"3px solid pink"
//  }
}))

function App() {
  const classes = useStyles();

  return (
    <div className="app">
      <Header />

     <Container className={classes.Container} >
       <CoinWatchContextProvider>
      <BrowserRouter>
      <Route exact path="/" component={CoinSynopsis} />
      <Route path="/coins/:id" component={CoinSpecifics} />
      </BrowserRouter>
      </CoinWatchContextProvider>
     </Container>
    </div>
  );
}

export default App;
