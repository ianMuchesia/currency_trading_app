import React from "react";
import styles from "../styles/Home.module.css";
import LivePricing from "./LivePricing";
const Pricing = () => {
  return (
    <div className="p-4 ">
      <div
        style={{
          background:
            "linear-gradient(90.07deg, #FF436B -0.79%, rgba(253, 165, 109, 0.98) 99.94%)",
        }}
        className="rounded-[34px] shadow-2xl mx-4 p-3 my-4 sm:p-10"
      >
        <h2 className="text-white text-5xl font-bold text-center">
          Currency Calculator
        </h2>
        <p className="text-center text-gray-200 text-base m-4">
          There are many variations of passages of Lorem Ipsum form, by injected
          humour randomised words which look .
        </p>
        <div className="grid gap-6 my-8 sm:grid-cols-2">
          <div className={styles.glass}>
            <h5 className="text-2xl m-1  text-gray-200">100</h5>
            <select className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1">
              <option className="">EURO</option>
              <option>BTC</option>
              <option>USD</option>
            </select>
          </div>
          <div className={styles.glass}>
            <h5 className="text-2xl m-1  text-gray-200">
              1.215845848
            </h5>
            <select className="bg-purple-800 text-white text-lg p-2 rounded-lg m-1">
              <option className="">BTC</option>
              <option>USD</option>
              <option className="">EURO</option>
            </select>
          </div>
        </div>
        <p className="text-xl text-gray-200  mx-4 my-14 text-center">100 EUR = 0.01098913 BTC</p>
      </div>
      <LivePricing/>
    </div>
  );
};

export default Pricing;
