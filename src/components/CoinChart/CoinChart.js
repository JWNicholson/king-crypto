import React, { useEffect,useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { Grid, Typography,Button, ButtonGroup, Container } from '@material-ui/core';
import { historyOptions } from '../../chartConfig/chartConfig';
import { makeStyles } from '@material-ui/styles';

const useStyles= makeStyles((theme) => ({
 
  paper: {
    background:"#f8f8ff",
    padding:"16px",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin:"auto",
  },
  chartControls:{
    display:"flex",
    flexDirection:"column",
  }
}));

const CoinChart = ({data}) => {
  const classes = useStyles();

   const chartRef = useRef();
   //de-structure
   const {day, week, year, detail} = data;
   const [formatTime,setFormatTime] = useState("24h");
   
   const timeviewFormat = () => {
     switch (formatTime){
       case "24":
         return day;
       case "7d":
         return week;
       case "1y":
         return year;
      default:
        return day;
     }
   }

    //load chart on page load
    useEffect(() => {
        if (chartRef && chartRef.current && data.detail) {
         
          const chartInstance = new Chartjs(chartRef.current, {
            type: "line",
            data: {
              datasets: [
                {
                  label: `${detail.name} price`,
                  data: timeviewFormat(),
                  backgroundColor: "rgba(0,172,230, 0.5)",
                  borderColor: "rgba(174, 305, 194, 0.4",
                  pointRadius: 0,
                },
              ],
            },
            options: {
              ...historyOptions,
            },
          });
        }
      });

    const renderPrice = () => {
      if (detail) {
        return (
        

      <Grid item xs={12} >  
          <Typography variant="body2" gutterBottom color="textPrimary">
            Current price: {detail.current_price.toFixed(2)}
          </Typography>
          <Typography variant="body2" gutterBottom
            color={(detail.price_change_24h < 0 ? "error" : "textPrimary")}>
            24hr price change: {detail.price_change_24h.toFixed(2)}%
          </Typography>
      </Grid>
        )
      }
    }

    return (
    
        <div className={classes.paper}>
        <Grid container item  className={classes.chartControls} >
            <div>{renderPrice()}</div>

        <Grid item x2={12}  >
            <canvas ref={chartRef} id="historyChart" width={300} ></canvas>
            {/* <canvas ref={chartRef} id="historyChart" ></canvas> */}
        </Grid>

        
        <ButtonGroup disableElevation="true" variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={() => setFormatTime("24")}>24h</Button>
        <Button onClick={() => setFormatTime("7d")}>1 week</Button>
        <Button onClick={() => setFormatTime("1y")}>1 year</Button>
        </ButtonGroup>

        </Grid>
        </div>
     
    );
}

export default CoinChart;
