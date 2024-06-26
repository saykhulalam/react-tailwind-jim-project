import React from "react";
import ione from "../assets/i1.png";
import itow from "../assets/i2.png";
import ithree from "../assets/i3.png";
import ifour from "../assets/i4.png";

const Join = () => {
  return (
    <>
      <section id="join" className=" bg-black lg:pt-[120px] pb-20 lg:pb-[130px]">
        <div className="max-w-container mx-auto px-3">
          <h2 className="lg:text-[48px] text-[30px] text-white font-medium font-made mb-[80px]">
            Reasons to join
          </h2>
          <div className=" flex lg:flex-row justify-between  flex-col gap-10">
            <div className="">
              <div className="flex gap-[30px] items-center">
                <img src={ione} alt="img" />
                <div className="">
                  <h3 className=" text-[16px] font-bold text-white font-made mb-[10px]">
                    15000 sq.m.
                  </h3>
                  <p className="text-[12px] text-white font-normal font-made">
                    A spacious gym for sports – a safe distance <br /> between
                    exercise machines
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex gap-[30px] items-center">
                <img src={ithree} alt="img" />
                <div className="">
                  <h3 className=" text-[16px] font-bold text-white font-made mb-[10px]">
                    More than 200 equipment
                  </h3>
                  <p className="text-[12px] text-white font-normal font-made">
                    No queues at the simulators. Premium equipment <br /> from
                    LifeStyle, Hammer Strength, TechnoGym.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between  lg:mt-[86px] mt-8 gap-10">
            <div className="">
              <div className="flex gap-[30px] items-center">
                <img src={itow} alt="img" />
                <div className="">
                  <h3 className=" text-[16px] font-bold text-white font-made mb-[10px]">
                    4 fitness zones
                  </h3>
                  <p className="text-[12px] text-white font-normal font-made">
                    From cardio to functional and cycle. Separate area <br />{" "}
                    for boxing and mixed martial arts
                  </p>
                </div>
              </div>
            </div>
            <div className=" ">
              <div className="flex gap-[30px] items-center">
                <img src={ifour} alt="img" />
                <div className="">
                  <h3 className=" text-[16px] font-bold text-white font-made mb-[10px]">
                    Round-the-clock operation
                  </h3>
                  <p className="text-[12px] text-white font-normal font-made">
                    The gym is open 24 hours a day, also works on all <br />{" "}
                    holidays and weekends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
