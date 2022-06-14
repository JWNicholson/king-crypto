import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoinChart from '../components/CoinChart/CoinChart';
import CoinData from '../components/CoinData/CoinData';
import coinApi from '../api/coinApi';
import axios from 'axios';
import {Grid } from '@material-ui/core';

const CoinDetails = () => {
    const { id } = useParams();
    
    const [coinData,setCoinData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const formatData = (data) => {
        return data.map((i) => {
            return {
                t: i[0],
                y:i[1].toFixed(2)//converts to a string, and rounds number to only 2 decimals
            }
        })
    }

	useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const [day,week,year,detail] = await  axios.all([
                    coinApi.get(`/coins/${id}/market_chart/`, {
                		params : {
                			vs_currency : 'usd',
                			days        : '1'
                		}
                    }),

                    coinApi.get(`/coins/${id}/market_chart/`, {
                		params : {
                			vs_currency : 'usd',
                			days        : '7'
                		}
                    }),

                    coinApi.get(`/coins/${id}/market_chart/`, {
                		params : {
                			vs_currency : 'usd',
                			days        : '365'
                		}
                    }),

                   coinApi.get("/coins/markets/", {
                        params: {
                            vs_currency: "usd",
                            ids:id
                        }
                    }),
        ]);

            //convert results array to objects to assign to appropriate arrays
            setCoinData({
                day: formatData(day.data.prices), 
                week: formatData(week.data.prices), 
                year: formatData(year.data.prices), 
                detail: detail.data[0]
            });
            //reset loading state
            setIsLoading(false);
        }
        getData();
    
	}, []);

	const renderCoinData = () => {
        //console.log("fubar",coinData.detail)

        if (isLoading){
            return <div>Loading...</div>
        }

		return (
            <>
           
			<Grid item container>
				<CoinChart data={coinData} />
				<CoinData data={coinData.detail} />
			</Grid>
           
            </>
		);
	};

	return renderCoinData();
};


export default CoinDetails;
