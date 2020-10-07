import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CoinSynopsis from '../src/pages/CoinSynopsis';
import CoinSpecifics from './pages/CoinSpecifics';
import { CoinWatchContextProvider } from './context/coinwatchContext';

const useStyles = makeStyles((theme) => ({
 header:{
   display:"flex",
   justifyContent:"space-evenly",
   alignItems:"center"
 },

}));

function App() {
  const classes = useStyles();
  return (
    <div className="app">
      <Router>
        <Container className={classes.header} >
          <Box className="headerIcon">
            <Link to="/"><HomeOutlinedIcon /></Link>
          </Box>
          <Typography variant="h4" component="h1" gutterBottom>
            King Crypto
           </Typography>
        </Container>
        <Container  >
          <CoinWatchContextProvider>
            <Switch>
              <Route exact path="/" component={CoinSynopsis} />
              <Route path="/coins/:id" component={CoinSpecifics} />
            </Switch>
          </CoinWatchContextProvider>
        </Container>
      </Router>
    </div>

  );
}

export default App;
