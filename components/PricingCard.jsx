import React from "react";

import dynamic from 'next/dynamic'
    
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const PricingCard = ({name, data}) => {
  

  const state = {
    options:{
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      type:"datetime",
      labels: {
          datetimeUTC: false
      }
    },
  
    title:{
      text: name,
      align: "center",
      style: {
          fontSize: "24px"
      }
  },
  chart:{
      id: "stock data",
      animations: {
          speed: 1300
      }
  },
  tooltip:{
      x:{
          format: "MMM dd HH:MM"
      }
  },
},
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]

  };

  return (
    <div>
    <Chart
              options={state.options}
              series={state.series}
              type="area"
              width="500"
            />


   {/*    <div className="border-2 border-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col items-center justify-center px-2 py-8 space-y-4  dark:bg-gray-800">
          <p className="text-lg font-medium">Personal</p>
          <p className="text-5xl font-bold">
            0€
            <span className="text-xl dark:text-gray-400"> /mo</span>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center px-2 py-8 dark:bg-gray-900">
          <ul className="self-stretch flex-1 space-y-2">
            <li className="flex justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <span>Lumet consectetur adipisicing</span>
            </li>
            <li className="flex justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <span>Lumet consectetur adipisicing</span>
            </li>
            <li className="flex justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-violet-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              <span>Lumet consectetur adipisicing</span>
            </li>
          </ul>
          <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 dark:bg-violet-400 dark:text-gray-900">
            Sign up
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default PricingCard;
