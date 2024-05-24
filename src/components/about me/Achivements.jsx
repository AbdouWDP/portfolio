import { RiMedalLine } from "react-icons/ri";
import { LuBriefcase } from "react-icons/lu";
import { PiHeadphonesBold } from "react-icons/pi";

function Achivements() {
  return (
    <div className="achievements w-full h-32 flex justify-between gap-2 max-md:h-24 max-lg:h-28 max-sm:flex-col max-sm:h-fit max-sm:items-center">
      <div className="experience achievement h-full rounded-xl bg-white flex justify-center items-center">
        <div className="w-full h-4/5 flex flex-col justify-between items-center text-title">
          <span className="text-3xl">
            <RiMedalLine />
          </span>
          <span className="text-xl font-semibold max-lg:text-base">
            Experience
          </span>
          <span className="text-xs text-text">+3 Years</span>
        </div>
      </div>
      <div className="projects achievement h-full rounded-xl bg-white flex justify-center items-center">
        <div className="w-full h-4/5 flex flex-col justify-between items-center text-title">
          <span className="text-3xl">
            <LuBriefcase />
          </span>
          <span className="text-xl font-semibold max-lg:text-base">
            Completed
          </span>
          <span className="text-xs text-text">+40 Project</span>
        </div>
      </div>
      <div className="support achievement h-full rounded-xl bg-white flex justify-center items-center">
        <div className="w-full h-4/5 flex flex-col justify-between items-center text-title">
          <span className="text-3xl">
            <PiHeadphonesBold />
          </span>
          <span className="text-xl font-semibold max-lg:text-base">
            Support
          </span>
          <span className="text-xs text-text">24/7</span>
        </div>
      </div>
    </div>
  );
}

export default Achivements;
