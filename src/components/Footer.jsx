import React from "react";
import footerlogo from "../assets/logo.png";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <section id="footer" className=" bg-black pb-[112px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-12 gap-[125px]">
            <div className=" col-span-4">
              <img src={footerlogo} alt="" />
              <p className="text-[14px] text-white font-made font-light mt-[26px]">
                Build strength and confidence at <br /> our gym with
                state-of-the-art <br />
                equipment, personalized training, <br /> and a motivating
                community
              </p>
            </div>
            <div className=" col-span-4">
              <h2 className="text-[18px] text-white font-bold font-made">
                Address
              </h2>
              <p className="text-[14px] text-white font-made font-light mt-[26px]">
                Republic of Belarus <br /> Minsk city <br /> Dzerzhinsky Avenue
                15
              </p>
            </div>
            <div className=" col-span-4">
              <h2 className="text-[18px] text-white font-bold font-made">
                Contact
              </h2>
              <ul className=" text-white text-[14px] font-light font-made mt-[30px]">
                <li className="flex gap-[10px] items-center">
                  <IoCallOutline className="text-[20px]" />
                  <h3>+375(44)-777-24-12</h3>
                </li>
                <li className="flex gap-[10px] items-center">
                  <MdOutlineMailOutline className="text-[20px]" />
                  <h3>gym24@gmail.com</h3>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
