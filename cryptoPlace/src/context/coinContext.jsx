
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
 const [currency, setCurrency] = useState({
  name: "usd",
  symbol: "$",
});

const currencyMap = {
  usd: "$",
  inr: "₹",
  eur: "€"
};

// Step 1: Update symbol when currency.name changes
useEffect(() => {
  setCurrency((prev) => ({
    ...prev,
    symbol: currencyMap[prev.name] || "$"
  }));
}, [currency.name]);

// Step 2: API fetch remains same
useEffect(() => {
  fatchAllCoin();
}, [currency.name]);


  const fatchAllCoin = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-iKBXV5RehLQL1UEGo4xD52Bt",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setAllCoin(res);
        console.log(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fatchAllCoin();
  }, [currency]);

  const contextValue = {
    allCoin,
    currency,
    setCurrency,
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;