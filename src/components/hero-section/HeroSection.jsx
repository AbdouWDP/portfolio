import Intro from "./Intro";
import Links from "./Links";
import team from "../../assets/develop-team.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function HeroSection() {
  useGSAP(() => {
    gsap.from(".text", {
      x: "100vw",
      opacity: 0,
      duration: 1,
      stagger: 0.4,
      ease: "circ.inOut",
    });
    gsap.from(".intro-image", {
      opacity: 0,
      duration: 1.5,
      ease: "back.inOut",
    });
    gsap.from(".s-link", {
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "circ.inOut",
    });
  }, {});

  return (
    <section className="hero-section w-screen">
      <article className="w-4/5 h-full m-auto flex flex-col items-center justify-center">
        <div className="w-full h-3/5 flex justify-between items-center max-lg:flex-col max-lg:gap-8">
          <Links />
          <Intro />
          <div className="intro-image w-2/5 h-full flex justify-center items-center max-lg:w-full">
            <img
              src={team}
              alt=""
              className="w-4/5 h-4/5 object-contain  max-lg:h-full "
            />
          </div>
        </div>
        {/* <div className="w-full m-auto flex justify-center items-center gap-2 bg-red-500">
          <button className="scroll-down-button relative w-9 h-14 border-2 border-title rounded-full">
            <span className="scroll-dot absolute top-2 left-1/2 bg-title rounded-full w-2 h-2 duration-200"></span>
          </button>
          <a href="#" className="text-xl font-semibold">
            <p>Scroll Down</p>
          </a>
        </div> */}
      </article>
    </section>
  );
}

export default HeroSection;
