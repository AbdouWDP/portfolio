import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function Links() {
  return (
    <div className="my-links h-4/5 flex flex-col justify-center gap-7 text-xl text-title max-lg:flex-row-reverse">
      <button className="s-link instagram-link hover:text-title-dark">
        <span>
          <FaInstagram />
        </span>
      </button>
      <button className="s-link dribble-link hover:text-title-dark">
        <span>
          <FaDribbble />
        </span>
      </button>
      <button className="s-link github-link hover:text-title-dark">
        <span>
          <FiGithub />
        </span>
      </button>
    </div>
  );
}

export default Links;
