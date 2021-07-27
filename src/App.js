import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(err => {
        alert('Crypto API failed to fetch. Error: ' + err);
      })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" className="coin-input" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      <p className="searchResults">Search Results: {filteredCoins.length}</p>
      <div className="coin-list">
        {!filteredCoins.length ? (<p style={{ 'textAlign': 'center', 'marginTop': '25px' }}>Currency Not Found</p>) :
          (<div>
            {filteredCoins.map(coin => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  volume={coin.total_volume}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                  rank={coin.market_cap_rank}
                />
              );
            })}
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
