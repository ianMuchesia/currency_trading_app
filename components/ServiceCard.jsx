import React, { useEffect } from "react";
import Image from "next/image";
import altcoins from "../public/altcoins.png";
import bitcoin_calculator from "../public/bitcoin-calculator.png";
import bitcoin_encryption from "../public/bitcoin-encryption.png";
import mining_hardware from "../public/mining-hardware.png"
const ServiceCard = () => {

  useEffect(()=>{
    const fetchData=async()=>{
    try{
      const date = new Date();
      const currentTime = Math.floor(date.getTime()/100)
  
      let oneDay;
      if(date.getDay()===6){
        oneDay = currentTime - 2*24*60*60;
      }else if(date.getDay()===0){
        oneDay = currentTime -3*24*60*60;
      }else{
        oneDay = currentTime - 24*60*60
      }
  
      const oneWeek = currentTime - 7*24*60*60
      const responses = await fetch(`https://finnhub.io/api/v1/stock/candle?symbol=MSFT&resolution=1&from=${oneWeek}&to=${currentTime}&token=ccq5kriad3i4o9irpul0ccq5kriad3i4o9irpulg
      `)
      const data =await  responses.json()
  
      console.log(data)
  
  
  
    }catch(error){
  
    }
  }
  fetchData()
  },[])
  return (
    <div>
      {" "}
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">

        <div className="grid place-items-center"><Image
          className=" w-40 object-center  h-40  "
          src={altcoins}
        />
        </div>
        <div className="p-6">
          <small className="text-gray-900 text-xs">Category</small>
          <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Your Heading
          </h1>
          <p className="text text-gray-500 leading-6">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
      </div>


      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20 ">
        <div className="grid place-items-center"><Image
          className=" w-40 object-center  h-40  "
          src={bitcoin_encryption}
        />
        </div>
        <div className="p-6">
          <small className="text-gray-900 text-xs">Category</small>
          <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Your Heading
          </h1>
          <p className="text text-gray-500 leading-6">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
      </div>


      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
        <div className="grid place-items-center"><Image
          className=" w-40 object-center  h-40  "
          src={mining_hardware}
        />
        </div>
        <div className="p-6">
          <small className="text-gray-900 text-xs">Category</small>
          <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Your Heading
          </h1>
          <p className="text text-gray-500 leading-6">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
      </div>



      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">
        <div className="grid place-items-center"><Image
          className=" w-40 object-center  h-40  "
          src={bitcoin_calculator}
        />
        </div>
        <div className="p-6">
          <small className="text-gray-900 text-xs">Category</small>
          <h1 className="text-2xl font-medium text-gray-700 pb-2">
            Your Heading
          </h1>
          <p className="text text-gray-500 leading-6">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ServiceCard;
