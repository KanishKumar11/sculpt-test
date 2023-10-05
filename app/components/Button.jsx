import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

const Button = (props) => {
  return (
    <a
      target="_blank"
      href="https://docs.google.com/forms/d/e/1FAIpQLScJcjgnCsFR9zcYXF_HjWJzcfu_KDqOJZjsI96TYtp3U3Xmig/viewform?embedded=true"
    >
      <button
        className={`${poppins.className} rounded-[8px] bg-[#7c0d60] px-8 py-4 lg:py-2 12l:px-10 lg:px-6 text-white hover:scale-105 transition-transform ease-in-out 12l:text-base lg:text-base cursor-pointer`}
      >
        join Wishlist
      </button>
    </a>
  );
};

export default Button;
