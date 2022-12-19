import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import LivePricing from "./LivePricing";
const Pricing = ({ data }) => {
  const [currencyDetails, setCurrencyDetails] = useState({
    fromCurrency: "AED",
    toCurrency: "AED",
    amount: "1",
  });
  const [result, setResult] = useState("");
  const [request, setRequest] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCurrencyDetails((prevCurrencyDetails) => {
      return {
        ...prevCurrencyDetails,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrencyDetails(currencyDetails);
    setRequest((prevRequest) => !prevRequest);
  };
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const myHeaders = new Headers();
        myHeaders.append("apikey", "g8HhsPzdptDtov298Xz5Q3LBvIsvULYd");

        const requestOptions = {
          method: "GET",
          redirect: "follow",
          headers: myHeaders,
        };
        const response = await fetch(
          `https://api.apilayer.com/currency_data/convert?to=${currencyDetails.toCurrency}&from=${currencyDetails.fromCurrency}&amount=${currencyDetails.amount}`,
          requestOptions
        );
        const data = await response.json();

        if (isMounted) {
          setResult(data.result);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [request]);

  //Note that in this version, I am using the Object.keys() method to get an array of the object's own enumerable properties, and then using the Array.prototype.map() method to create an array of <option> elements. This approach is more concise and easier to read than using a for...in loop.
/*   const currencyList = (list, selectedOption, name) => (
    <select
      className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1 w-[40%] truncate"
      value={selectedOption}
      onChange={handleChange}
      name={`${name}`}
    >
      {Object.keys(list).map((prop) => (
        <option value={prop} key={prop}>
          {prop}: {list[prop]}
        </option>
      ))}
    </select>
  ); */

  return (
    <div className="p-4  ">
      <form
        style={{
          background:
            "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)",
        }}
        className="rounded-[34px] shadow-2xl mx-4 p-3 my-4 sm:p-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white text-5xl font-bold text-center">
          Currency Calculator
        </h2>
        <p className="text-center text-gray-200 text-base m-4">
          There are many variations of passages of Lorem Ipsum form, by injected
          humour randomised words which look .
        </p>
        <div className="grid gap-6 my-8 sm:grid-cols-2 lg:mx-32">
          <div className={styles.glass}>
            <input
              type="number"
              value={currencyDetails.amount}
              placeholder={`${
                currencyDetails.amount
              }${"    "}change the amount here`}
              name="amount"
              className="bg-transparent w-10 border-none text-gray-200"
              onChange={handleChange}
            />

           {/*  {currencyList(data, currencyDetails.fromCurrency, "fromCurrency")} */}
          </div>
          <div className={styles.glass}>
            <h5 className="text-2xl m-1  text-gray-200">{result}</h5>
           {/*  {currencyList(data, currencyDetails.toCurrency, "toCurrency")} */}
          </div>
        </div>
        <div className="grid place-items-center">
          <button className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1">
            Convert
          </button>
        </div>
        <p className="text-xl text-gray-200  mx-4 my-14 text-center">
          {currencyDetails.amount} {currencyDetails.fromCurrency} = {result}{" "}
          {currencyDetails.toCurrency}
        </p>
      </form>

      
    </div>
  );
};

export default Pricing;
