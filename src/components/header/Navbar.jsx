import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useGSAP(() => {
    gsap.from(".nav-link", { opacity: 0, duration: 0.5, stagger: 0.2 });
  }, {});

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <header
      className={`navbar w-screen h-16 ${
        scroll && "sticky shadow-md bg-body"
      } top-0 z-50`}
    >
      <nav className="nav h-full w-4/5 m-auto flex justify-between items-center">
        <a href="">
          <p className="text-title font-bold text-xl">AWDP</p>
        </a>
        <ol className="flex gap-10 font-semibold text-title">
          <li className="nav-link">
            <a href="#">
              <p>Home</p>
            </a>
          </li>
          <li className="nav-link">
            <a href="#about">
              <p>About</p>
            </a>
          </li>
          <li className="nav-link">
            <a href="#skills">
              <p>Skills</p>
            </a>
          </li>
          <li className="nav-link">
            <a href="#services">
              <p>Services</p>
            </a>
          </li>
          <li className="nav-link">
            <a href="#portfolio">
              <p>Portfolio</p>
            </a>
          </li>
          <li className="nav-link">
            <a href="#contact">
              <p>Contact</p>
            </a>
          </li>
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
