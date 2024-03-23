import React from "react";
import logo from "../assets/logo.png";

const Nave = () => {
  return (
    <>
      <nav id="nave" className=" absolute w-full mt-[32px]">
        <div className="max-w-container mx-auto">
          <div className="flex justify-between">
            <img src= {logo} alt="logo" />
            <ul className=" text-white font-made text-[12px] font-light flex gap-[75px]">
              <li><a href="#">Advantages</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Trainers</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
