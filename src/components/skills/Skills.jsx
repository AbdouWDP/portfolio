import React from "react";
import { MdVerified } from "react-icons/md";

const Language = ({ lang, level }) => {
  return (
    <div className={`${lang} flex gap-1 w-1/2`}>
      <div className="verified-icon">
        <span>
          <MdVerified />
        </span>
      </div>
      <div className="lang-level capitalize">
        <div className="text-title text-xl max-lg:text-sm font-semibold cursor-default hover:underline">
          <h3> {lang} </h3>
        </div>
        <div className="text-text text-sm">
          <p> {level} </p>
        </div>
      </div>
    </div>
  );
};

function Skills() {
  return (
    <section
      className="skills w-screen flex justify-center items-center"
      id="skills"
    >
      <article className="w-4/5 h-full max-sm:w-11/12">
        <div className="h-1/4">
          <div className="text-4xl text-title font-bold text-center">
            <h1>Skills</h1>
          </div>
          <div className="text-text text-center my-2">
            <p>My technical level</p>
          </div>
        </div>
        <div className="all-skills w-full h-1/2 flex justify-center items-center gap-8 max-md:flex-col max-md:mt-8">
          <div className="languages bg-white rounded-2xl flex justify-center items-center max-sm:w-4/5 max-md:w-3/5 max-xl:w-1/2">
            <div className="w-4/5 h-4/5 flex justify-center items-center flex-col gap-6 max-sm:py-4 max-sm:w-11/12">
              <div className="text-xl text-title-bold font-semibold text-center">
                <h2>Your needs</h2>
              </div>
              <div className="language flex flex-wrap w-full gap-y-6">
                <Language lang="html" level="advanced" />
                <Language lang="css" level="advanced" />
                <Language lang="tailwind" level="intermidate" />
                <Language lang="git" level="intermidate" />
                <Language lang="javascript" level="advanced" />
                <Language lang="react" level="advanced" />
              </div>
            </div>
          </div>
          <div className="libraries bg-white rounded-2xl flex justify-center items-center max-sm:w-4/5 max-md:w-3/5 max-xl:w-1/2">
            <div className="w-4/5 h-4/5 flex justify-center items-center flex-col gap-6 max-sm:py-4 max-sm:w-11/12">
              <div className="text-xl text-title-bold font-semibold text-center">
                <h2>My additions</h2>
              </div>
              <div className="language flex flex-wrap w-full gap-y-6">
                <Language lang="axios" level="intermidate" />
                <Language lang="redux" level="intermidate" />
                <Language lang="react router" level="intermidate" />
                <Language lang="gsap" level="intermidate" />
                <Language lang="swiper" level="intermidate" />
                <Language lang="material ui" level="intermidate" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Skills;
