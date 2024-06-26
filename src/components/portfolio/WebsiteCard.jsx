import { FaArrowRightLong } from "react-icons/fa6";

function WebsiteCard({ website }) {
  return (
    <div className="website-card h-3/5 max-sm:w-full max-md:w-3/5 max-lg:w-4/5 max-xl:w-4/5 max-lg:aspect-square bg-white rounded-2xl flex justify-center items-center">
      <div
        className="w-11/12 flex flex-col justify-between max-xl:justify-around"
        style={{ height: "90%" }}
      >
        <div className="website-card-image w-full h-3/4 overflow-hidden">
          <a href={website.link}>
            <img
              src={website.img}
              alt={website.name}
              className="w-full h-full object-cover rounded-lg hover:scale-110 duration-300"
            />
          </a>
        </div>
        <div className="website-build-with flex gap-1.5 items-center overflow-hidden max-sm:py-2 max-xl:py-2">
          {website.technologies.map((technology) => {
            return (
              <div className="w-6 h-6">
                <img
                  src={technology}
                  alt=""
                  className="w-full h-full object-contain "
                />
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-xl font-semibold text-title capitalize max-sm:text-lg">
            <h2> {website.name} </h2>
          </div>
          <div className="text-text text-sm">
            <a href={website.link}>
              <button className="demo-button flex gap-1 items-center">
                <span>Demo</span>
                <span className="dbi duration-200 ease-in-out">
                  <FaArrowRightLong />
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteCard;
