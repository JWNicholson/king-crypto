import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import { Box, Card, CardContent, makeStyles, Typography, } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        marginTop: "2rem"
    },
    content: {
        flex: '1 0 auto',

    },

    details: {
        display: "flex",
        flexFlow: "row wrap",
        alignItems: "center",
    },

    coinlistImage: {
        maxWidth: "90px",
        height: "auto",
    },

    contentBox: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "flex-start",
        width: "90%",
        margin: "auto",
    },
    contentBox2: {
        display: "flex",
        flexFlow: "row nowrap",
       
    },
    deletIconBox: {
        color: "red",
        display: "flex",
    },

}));

const Coin = ({ coin, deleteCoin }) => {
    const classes = useStyles();

    return (

        <Card className={classes.root} variant="outlined"  >
            <Link to={`/coins/${coin.id}`} >
                <Box className={classes.details}>

                    <CardContent className={classes.content}  >
                        <Box className={classes.coinImgBox}>
                            <img className={classes.coinlistImage} src={coin.image} alt="coin logo" />
                        </Box>
                    </CardContent>

                    <CardContent className={classes.content}  >
                        <Box className={classes.contentBox}>
                            <Typography className={classes.contentBoxData}>Current Price</Typography>
                            <Typography className={classes.contentBoxData}>{coin.current_price}</Typography>
                        </Box>
                    </CardContent>

                    <CardContent className={classes.content}>
                        <Box className={classes.contentBox2}
                            color={coin.price_change_percentage_24h < 0 ? "error.main" : "success.dark"}
                        >
                            <Typography
                                // color={coin.price_change_percentage_24h < 0 ? "error.main" : "success.dark"}
                            >
                                    {coin.price_change_percentage_24h < 0 ?
                                        <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                                {coin.price_change_percentage_24h}%
                                </Typography>
                        </Box>
                    </CardContent>

                    <CardContent className={classes.content}   >
                        <Box className={classes.deletIconBox}>
                            <DeleteOutlineTwoToneIcon fontSize="large"
                                onClick={(e) => {
                                    e.preventDefault();
                                    deleteCoin(coin.id);
                                    console.log("Delete clicked")
                                }}
                            />
                        </Box>
                    </CardContent>

                </Box>
            </Link>
        </Card>

    );
}

export default Coin;
