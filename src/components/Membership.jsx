import React from "react";
import { TiTick } from "react-icons/ti";

const Membership = () => {
  return (
    <div>
      <section id="membership" className="bg-black pb-[262px]">
        <div className="max-w-container mx-auto">
          <h2 className="text-[48px] text-white font-made font-bold text-center mb-[120px]">
            Gym membership
          </h2>
          <div className=" grid grid-cols-12 gap-24">
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                  Pass ‘Trial’{" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                  $ 0
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Access to the gym from 8:00 to 14:00
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    The trainer on duty will introduce you to the gym
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[80px] ml-16">
                  Buy
                </button>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                  Pass ‘Easy Start’{" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                  $ 119
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Visit without restrictions 24/7
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Individual training program
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Access to the VTRAINER application
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Trainer support
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[40px] ml-16">
                  Buy
                </button>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                  Pass ‘Free Time’{" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                  $ 49
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    The entrance time to the gym is from 14:00 to 16:00
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Without suspension of gym membership
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    WThe trainer on duty will introduce you to the gym
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[40px] ml-16">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-12 mt-[68px] gap-24">
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                Pass ‘1 Month 24/7’ {" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                $ 85
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Visit without restrictions 24/7
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    The trainer on duty will introduce you to the gym
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[80px] ml-16">
                  Buy
                </button>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                Pass ‘In Shape (AM)’ {" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                $ 165
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Training in mini-groups until 14:00
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Without suspension of gym membership
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Classes with a trainer in a mini-group 3 times a week
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Trainer support
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[20px] ml-16">
                  Buy
                </button>
              </div>
            </div>
            <div className=" col-span-4">
              <div className="w-[275px] h-[397px] rounded-[10px] bg-[#222222] pt-[20px]">
                <h2 className="text-white text-[18px] font-made font-bold text-center">
                Pass ‘In Shape (PM)’ {" "}
                </h2>
                <h3 className="text-[24px] text-white font-medium font-made text-center mt-[10px]">
                $ 195 
                </h3>
                <div className=" w-[265px] mx-auto h-[2px] bg-[#000000] mt-[22px]"></div>
                <ul className="mt-[27px] pl-[20px] pr-[20px]">
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Training in mini-groups until 17:00
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Without suspension of gym membership
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Classes with a trainer in a mini-group 3 times a week
                  </li>
                  <li className="flex text-[14px] text-white font-light font-made items-center gap-3 mt-[15px]">
                    <div className="w-[20px] h-[20px] rounded-full border-[1px] flex justify-center items-center">
                      <TiTick />
                    </div>
                    Trainer support
                  </li>
                </ul>
                <button className="w-[107px] h-[30px] bg-praymari rounded-full text-[#000000] text-[14px] font-bold font-made mt-[20px] ml-16">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
