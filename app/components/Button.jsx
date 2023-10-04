import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Button = (props) => {
  return (
    <a href="#">
      <button
        className={`${poppins.className} rounded-[8px] bg-[#7c0d60] px-8 py-3 12l:px-10 lg:px-6 text-white hover:scale-105 transition-transform ease-in-out 12l:text-xl lg:text-base cursor-pointer`}
      >
        {props.text}
      </button>
    </a>
  );
};

export default Button;
