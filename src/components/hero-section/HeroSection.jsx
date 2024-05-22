import Intro from "./Intro";
import Links from "./Links";
import team from "../../assets/develop-team.png";

function HeroSection() {
  return (
    <section className="hero-section w-screen">
      <div className="w-4/5 h-full m-auto flex flex-col items-center justify-center">
        <div className="w-full h-3/5 flex justify-between items-center">
          <Links />
          <Intro />
          <div className="intro-image w-2/5 h-full flex justify-center items-center">
            <img src={team} alt="" className="w-4/5 h-4/5 object-contain" />
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
      </div>
    </section>
  );
}

export default HeroSection;
