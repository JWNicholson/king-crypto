import React, { useEffect,useRef, useState } from 'react';
import Chartjs from 'chart.js';
import { Box, Typography,Button, ButtonGroup, Paper } from '@material-ui/core';
import { historyOptions } from '../../chartConfig/chartConfig';
import { makeStyles } from '@material-ui/styles';

const useStyles= makeStyles((theme) => ({
  root: {
      margin:"28px 0",
      padding:"18px",
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
          <>
          <Typography variant="body2" gutterBottom>
            Current price: {detail.current_price.toFixed(2)}
          </Typography>

          <Typography variant="body2" gutterBottom
            color={(detail.price_change_24h < 0 ? "error" : "textPrimary")}>
            24hr price change: {detail.price_change_24h.toFixed(2)}%
          </Typography>
          </>
        )
      }
    }

    return (
      <Paper className={classes.root}>
        <Box   >
            <div>{renderPrice()}</div>
        <div>
            <canvas ref={chartRef} id="historyChart" width={300} height={400}></canvas>
        </div>

        
        <ButtonGroup color="textSecondary" aria-label="outlined secondary button group">
        <Button onClick={() => setFormatTime("24")}>24h</Button>
        <Button onClick={() => setFormatTime("7d")}>1 week</Button>
        <Button onClick={() => setFormatTime("1y")}>1 year</Button>
        </ButtonGroup>

        </Box>
        </Paper>
    )
}

export default CoinChart;
