import React, { useEffect } from "react";
import Image from "next/image";
import altcoins from "../public/altcoins.png";
import bitcoin_calculator from "../public/bitcoin-calculator.png";
import bitcoin_encryption from "../public/bitcoin-encryption.png";
import mining_hardware from "../public/mining-hardware.png"
const ServiceCard = () => {

  
  return (
    <div>
      {" "}
      
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div className="mx-auto flex w-80 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-gray-400/20">

        <div className="grid place-items-center"><Image
          className=" w-40 object-center  h-40  "
          src={altcoins}
          alt=""
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
          alt=""
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
          alt=""
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
          alt=""
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
