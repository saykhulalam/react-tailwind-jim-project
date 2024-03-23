import React from "react";
import aboutimg from '../assets/about.png'

const About = () => {
  return (
    <>
      <section id="about" className=" bg-black pb-[261px]">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-12 gap-16">
            <div className=" col-span-6">
              <h2 className="text-white font-made font-medium font-made text-[48px] mb-[65px]">About us</h2>
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
            <div className=" col-span-6">
                <img src= {aboutimg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
