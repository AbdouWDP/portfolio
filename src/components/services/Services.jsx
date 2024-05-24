import { MdOutlineWeb } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { MdOutlineDraw } from "react-icons/md";

const ServiceCard = ({ offer, icon }) => {
  return (
    <div className="service-card bg-white rounded-2xl w-1/4 max-sm:w-3/5 max-md:w-1/2 max-lg:w-2/5 flex justify-center items-center cursor-pointer">
      <div className="w-4/5 h-4/5 flex items-end">
        <div className="w-3/5 h-3/4 flex flex-col justify-between max-md:w-full">
          <div className="service-card-icon text-5xl text-title">
            <span>{icon}</span>
          </div>
          <div className="text-title text-2xl font-semibold capitalize max-sm:text-lg">
            <h2> {offer} </h2>
          </div>
          <div className="view-more-button">
            <button className="flex items-center gap-1 text-text text-sm">
              <span>View More</span>
              <span className="vmbi duration-200 ease-in-out">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Services() {
  return (
    <section className="services w-screen" id="services">
      <article className="w-4/5 h-full m-auto flex flex-col">
        <div className="h-1/5">
          <div className="text-4xl text-title font-bold text-center">
            <h1>Services</h1>
          </div>
          <div className="text-text text-center my-2">
            <p>What i offer</p>
          </div>
        </div>
        <div className="my-services w-full h-3/5 flex justify-center items-center gap-8 max-md:gap-4 flex-wrap max-lg:mt-8">
          <ServiceCard offer="web developer" icon={<MdOutlineWeb />} />
          <ServiceCard offer="ui/ux designer" icon={<MdOutlineDraw />} />
          <ServiceCard offer="web designer" icon={<IoCodeSlash />} />
        </div>
      </article>
    </section>
  );
}

export default Services;
