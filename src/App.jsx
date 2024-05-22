import Navbar from "./components/header/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import "./App.css";
import AboutMe from "./components/about me/AboutMe";
import Skills from "./components/skills/Skills";
import { FaArrowUpLong } from "react-icons/fa6";
import { useRef } from "react";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  const scrollButton = useRef(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
      scrollButton.current.classList.remove("hidden");
    } else {
      scrollButton.current.classList.add("hidden");
    }
  });
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <div
        className="up-button fixed w-12 h-12 rounded-md bg-title bottom-10 right-10 text-xl hidden"
        ref={scrollButton}
      >
        <a
          href="#"
          className="w-full h-full bg-title text-white flex justify-center items-center rounded-md hover:bg-title-dark"
        >
          <span>
            <FaArrowUpLong />
          </span>
        </a>
      </div>
    </>
  );
}

export default App;
