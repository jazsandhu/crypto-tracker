import React from 'react';
import useStyles from './Coin_css';
import { Grid, Paper } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, rank }) => {
    const classStyle = useStyles();
    return (
        <div className={classStyle.coin_root}>
            <Grid className={classStyle.coin_container}>
                <sub>Rank {rank}</sub><hr /><br />
                <Grid container spacing={2}>
                    <Grid className={classStyle.coin} item md={4} sm={12} xs={12}>
                        <img src={image} alt="crypto" />
                        <h2>{name}</h2>
                        <p>{symbol}</p>
                    </Grid>
                    <Grid className={classStyle.coin_data} item md={8} sm={12} xs={12}>
                        <Grid container spacing={4}>
                            <Grid className={classStyle.coin_data} item lg={3} md={6} sm={6} xs={12}>
                                <sub>Current Price</sub>
                                <hr />
                                <p>${price.toLocaleString()}</p>
                            </Grid>
                            <Grid className={classStyle.coin_data} item lg={3} md={6} sm={6} xs={12}>
                                <sub>Price Change <span>24h</span></sub>
                                <hr />
                                {
                                    priceChange < 0 ?
                                        (<p style={{ color: '#ff0000' }}><ExpandMoreIcon style={{fill: "#ff0000"}} />{priceChange.toFixed(2)}</p>) :
                                        <p style={{ color: '#04ff00' }}><ExpandLessIcon style={{fill: "#04ff00"}} />{priceChange.toFixed(2)}</p>
                                }
                            </Grid>
                            <Grid className={classStyle.coin_data} item lg={3} md={6} sm={6} xs={12}>
                                <sub>Volume</sub>
                                <hr />
                                <p>${volume.toLocaleString()}</p>
                            </Grid>
                            <Grid className={classStyle.coin_data} item lg={3} md={6} sm={6} xs={12}>
                                <sub>Market Cap</sub>
                                <hr />
                                <p>${marketCap.toLocaleString()}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Coin
