
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CoinContext } from '../../context/coinContext';
// import LineChart from '../../components/lineChart/lineChart';
import './coin.css';

const Coin = () => {
  const { coinID } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-91Na3gF37jLkMimFB9B4FtwP",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options)
      .then(response => response.json())
      .then(data => setCoinData(data))
      .catch(err => console.error("Coin data error:", err));
  };

  const fetchHistoricalData = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=10`, options)
      .then(res => res.json())  // ✅ return the parsed JSON
      .then(data => {
        setHistoricalData(data); // ✅ update the state correctly
        console.log("historical", data);
      })
      .catch(err => console.error("Historical data error:", err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>

        {/* <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div> */}
      </div>
    );
  } else {
    return (
      <div className='spinner'>
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;