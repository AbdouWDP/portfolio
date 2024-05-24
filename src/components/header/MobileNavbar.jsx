import { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { TbPhoto } from "react-icons/tb";
import { LuBriefcase, LuLayoutGrid } from "react-icons/lu";
import { BiSend } from "react-icons/bi";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";

const MobileNavList = ({ title, icon }) => {
  return (
    <li className="li-item text-title font-semibold w-1/4">
      <a
        href={`#${title}`}
        className="flex flex-col items-center hover:text-title-dark"
      >
        <span className="text-2xl">{icon}</span>
        <p className="capitalize"> {title} </p>
      </a>
    </li>
  );
};

function MobileNavbar() {
  const [scroll, setScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });
  {
  }

  useEffect(() => {
    if (openNav) {
      gsap.from(".li-item", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "circ.inOut",
      });
    }
  }, [openNav]);

  return (
    <header
      className={`mobile-navbar w-screen  ${
        openNav ? "h-1/4 bg-white" : "h-14"
      } fixed bottom-0 z-50 ${scroll && "bg-white shadow-md"} `}
      style={{ borderRadius: openNav ? "16px 16px 0 0" : 0 }}
    >
      {openNav ? (
        <div
          className={`mob-nav w-4/5 h-full m-auto flex justify-center items-center duration-300 ease-linear`}
        >
          <div className="w-full h-4/5">
            <nav className="m-n w-full h-full">
              <ol className="flex flex-col justify-around w-full h-full">
                <div className="w-full flex justify-between">
                  <MobileNavList title="home" icon={<FiHome />} />
                  <MobileNavList title="about" icon={<FaRegUser />} />
                  <MobileNavList title="skills" icon={<FaRegFileAlt />} />
                </div>
                <div className="w-full flex justify-between">
                  <MobileNavList title="services" icon={<LuBriefcase />} />
                  <MobileNavList title="portfolio" icon={<TbPhoto />} />
                  <MobileNavList title="contact" icon={<BiSend />} />
                </div>
              </ol>
            </nav>
          </div>
        </div>
      ) : (
        <div className="w-11/12 h-full m-auto flex justify-between items-center text-title text-xl font-bold">
          <div>
            <p>AWDP</p>
          </div>
          <div>
            <button className="text-2xl" onClick={() => setOpenNav(true)}>
              <span>
                <LuLayoutGrid />
              </span>
            </button>
          </div>
        </div>
      )}
      {openNav && (
        <div>
          <button
            className="close-mob-nav-button text-3xl text-text absolute right-4 top-4"
            onClick={() => setOpenNav(false)}
          >
            <span>
              <IoClose />
            </span>
          </button>
        </div>
      )}
    </header>
  );
}

export default MobileNavbar;
