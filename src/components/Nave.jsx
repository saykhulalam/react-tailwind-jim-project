import React, { useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuRound } from "react-icons/cg";

const Nave = () => {
  let [manuShow, setManuShow] = useState(true);
  let handleManu = () => {
    setManuShow(!manuShow);
  };

  return (
    <>
      <nav id="nave" className=" absolute w-full mt-[32px]">
        <div className="max-w-container mx-auto px-3">
          <div className="flex items-center lg:gap-[500px] justify-between">
            <img src={logo} alt="logo" />

            <div>
            <ul className={`lg:text-white font-made text-[12px] font-light lg:flex lg:gap-[75px] border lg:p-0 px-5 py-2 absolute top-10 left-2  lg:bg-transparent lg:static lg:border-none bg-white text-black ${ manuShow ? "hidden" : "block"}`}>
              <li className="mb-4 xl:m-0">
                <a href="#">Advantages</a>
              </li>
              <li className="mb-4 xl:m-0">
                <a href="#">Membership</a>
              </li>
              <li className="mb-4 xl:m-0">
                <a href="#">About</a>
              </li>
              <li className="mb-4 xl:m-0">
                <a href="#">Trainers</a>
              </li>
            </ul>
            </div>

            <CgMenuRound
              onClick={handleManu}
              className="text-white text-[30px] lg:hidden"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nave;
