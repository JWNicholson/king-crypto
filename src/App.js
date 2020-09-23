import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import CoinSpecifics from '../src/pages/coinSpecifics';
import CoinSynopsis from '../src/pages/coinSynopsis';



function App() {
  return (
    <div className="app">
     <Container >
      <BrowserRouter>
      <Route exact path="/" component={CoinSynopsis} />
      <Route path="/coins/:id" component={CoinSpecifics} />
      </BrowserRouter>
     </Container>
    </div>
  );
}

export default App;
