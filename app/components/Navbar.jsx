import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "600"] });

const Navbar = () => {
  return (
    <div className="flex justify-between w-full items-center bg-white shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)] overflow-hidden flex-row py-4 fixed top-0 z-[999] md:px-[88px] px-[20px] box-border text-2xl font-subtitle-1">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="">
        <Button />
      </div>
    </div>
  );
};

export default Navbar;
