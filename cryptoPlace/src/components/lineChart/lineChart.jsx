import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";
function lineChart({ historicalData }) {
    
  const [data, setData] = useState[["Date", "Prices"]];
  useEffect(() => {
    let dataCopy = [["Dates", "Prices"]];
    if(historicalData.prices){
        
        historicalData.prices.map((item)=>{

            dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
        })
        setData(dataCopy)
    }
  }, [historicalData]);
  
  return(
   <div>
    {data}
    <Chart 
    chartType="lineChart"
    data={(data)}
    height="100%"
    legendToggle
    />
    </div>
)}

export default lineChart;
