import React from 'react';
import useStyles from './Coin_css';
import { Grid } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketCap, rank }) => {
    const classStyle = useStyles();
    return (
        <div className={classStyle.coin_div}>
            <Grid className={classStyle.coin_grid}>
                <div className={classStyle.coin_rank}>
                    <sub>Rank {rank}</sub>
                    <hr />
                </div>
                <Grid className={classStyle.coin_container} container spacing={0}>
                    <Grid item md={4} sm={12} xs={12}>
                        <Grid className={classStyle.coin_container} container spacing={0}>
                            <Grid className={classStyle.coin} item lg={3} md={12} sm={12} xs={12}>
                                <img src={image} alt="crypto" />
                            </Grid>
                            <Grid className={classStyle.coin} item lg={6} md={12} sm={12} xs={12}>
                                <h2>{name}</h2>
                            </Grid>
                            <Grid className={classStyle.coin} item lg={3} md={12} sm={12} xs={12}>
                                <p>{symbol}</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classStyle.coin_data} item md={8} sm={12} xs={12}>
                        <Grid container spacing={3}>
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
                                        (<p style={{ color: '#ff0000' }}><ExpandMoreIcon style={{ fill: "#ff0000" }} />{priceChange.toFixed(2)}</p>) :
                                        <p style={{ color: '#04ff00' }}><ExpandLessIcon style={{ fill: "#04ff00" }} />{priceChange.toFixed(2)}</p>
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
