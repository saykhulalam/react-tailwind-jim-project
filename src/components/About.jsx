import React from "react";
import aboutimg from "../assets/about.png";

const About = () => {
  return (
    <>
      <section id="about" className=" bg-black lg:pb-[261px] pb-20">
        <div className="max-w-container mx-auto px-3">
          <div className="flex lg:flex-row flex-col justify-between gap-5">
            <div
              className="lg:w-[50%] "
            >
              <h2 className="text-white font-made font-medium lg:text-[48px] text-[30px] lg:mb-[65px] mb-5">
                About us
              </h2>
              <p className="text-[14px] text-white font-made font-light leading-8 text-justify">
                Gym24 is a leading fitness center located near Grushevka metro
                station, offering over 1500 sq. m of space dedicated to
                top-of-the-line workout equipment from leading brands such as
                Hammer Strength, Life Fitness, and TechnoGym. With affordable
                membership options, Gym24 is accessible to everyone who wants to
                reach their fitness goals, whether it's building strength,
                increasing endurance, or losing weight. Certified trainers at
                Gym24 provide expert guidance and support to develop
                personalized workout plans tailored to each individual's needs
                and goals.{" "}
              </p>
            </div>
            <div className=" lg:w-[50%]">
              <img src={aboutimg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
