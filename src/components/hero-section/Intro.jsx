import { TbSend } from "react-icons/tb";

function Intro() {
  return (
    <div className="introduction w-2/5 h-full flex flex-col justify-center overflow-hidden max-lg:w-full">
      <div className="flex flex-col gap-6 max-lg:gap-4">
        <div className="text-6xl font-bold text-title-dark text max-2xl:text-5xl max-xl:text-4xl max-md:text-4xl max-sm:text-3xl">
          <h1>Abderrahmane</h1>
        </div>
        <div className="flex gap-1.5 items-center text-xl text-title font-semibold text">
          <div className="line w-1/5 bg-text"></div>
          <div>
            <p>Web Developer</p>
          </div>
        </div>
        <div className="text-text text">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos, suscipit.
          </p>
        </div>
      </div>
      <div className="intro-button w-2/5 h-16 mt-16 text-lg font-semibold text max-lg:w-3/5 max-lg:mt-8">
        <button className="w-full h-full text-white flex items-center justify-center gap-2 bg-title hover:bg-title-dark rounded-xl">
          <span>Say Hello</span>
          <span className="text-xl">
            <TbSend />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Intro;
