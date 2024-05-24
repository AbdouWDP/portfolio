import React from "react";
import Achivements from "./Achivements";
import { TbSend } from "react-icons/tb";
import theme from "../../assets/color-theme.png";

function AboutMe() {
  return (
    <section
      className="about-me w-screen h-screen flex justify-center items-center"
      id="about"
    >
      <article className="w-4/5 h-4/5 flex flex-col justify-around">
        <div>
          <div className="text-4xl text-title font-bold text-center">
            <h1>About Me</h1>
          </div>
          <div className="text-text text-center my-2">
            <p>My introduction</p>
          </div>
        </div>
        <div className="w-full h-3/4 flex justify-between items-center max-md:flex-col max-lg:my-8">
          <div className="about-me-image w-2/5 h-4/5 m-auto max-md:w-full max-md:my-8">
            <img src={theme} alt="" className="w-full h-full object-contain" />
          </div>
          <div className="w-1/2 h-4/5 max-md:w-full">
            <div className="w-full h-full flex flex-col justify-between max-lg:gap-4">
              <Achivements />
              <div className="w-4/5 max-lg:w-full">
                <p className="text-text font-semibold">
                  Frontend developer, I create web pages with UI / UX user
                  interface, I have years of experience and many clients are
                  happy with the projects carried out.
                </p>
              </div>
              <div className="check-portfolio-button w-2/5 h-16 text-lg font-semibold max-lg:w-3/5 max-sm:w-4/5">
                <button className="w-full h-full text-white flex items-center justify-center gap-2 bg-title hover:bg-title-dark rounded-xl">
                  <span>Check Portfolio</span>
                  <span className="text-xl">
                    <TbSend />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;
