import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from '../src/components/Header/Header';
import CoinSynopsis from '../src/pages/CoinSynopsis';
import CoinSpecifics from '../src/pages/CoinSpecifics';
import { CoinWatchContextProvider } from './context/coinwatchContext';



function App() {
  return (
    <div className="app">
      <Header />

     <Container >
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
