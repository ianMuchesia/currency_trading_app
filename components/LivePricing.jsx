import React, { useEffect, useState } from "react";
import PricingCard from "./PricingCard";

const LivePricing = () => {
  const [watchList, setWatchList] = useState(["IBM", "GOOGL", "MSFT"]);

  const [chartData , setChartData ] = useState([])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const date = new Date();
        const currentTime = Math.floor(date.getTime() / 1000);

        const oneWeek = currentTime - 7 * 24 * 60 * 60;
        const responses = await Promise.all(
          watchList.map(async (stock) => {
            const response = await fetch(
              `https://finnhub.io/api/v1/stock/candle?symbol=${stock}&resolution=D&from=${oneWeek}&to=${currentTime}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg`
            );
            const data = await response.json();
            return {
              response: data,
              name: stock,
            };
          })
        );
if(isMounted){
  setChartData(responses)
}
        ;
      } catch (error) {
        console.log(error.message);
      } ///
    };
    fetchData();
    return ()=>{isMounted = false}
  }, []);

  return (
    <div className="my-14 p-10">
      <h1 className="text-5xl text-center text-gray-800 font-extrabold">
        Trade Live Pricing
      </h1>
      <p className="text-lg text-gray-600 text-center  my-10">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some look even slightly believable.
      </p>
      <div className="grid lg:grid-cols-3 gap-4">
        {chartData.map((item, index) => {
          return <PricingCard key={index} name={item.name} data={item.response} />;
        })}
      </div>
    </div>
  );
};

export default LivePricing;
