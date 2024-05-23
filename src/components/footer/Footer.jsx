import React from "react";

function Footer() {
  return (
    <footer className="footer w-screen flex flex-col justify-center items-center gap-4 text-title-dark text-4xl font-bold bg-white">
      <h1>AWDP</h1>
      <div className="flex gap-8 text-title text-base font-semibold">
        <a href="#about" className="hover:text-title-dark">
          About
        </a>
        <a href="#portfolio" className="hover:text-title-dark">
          Portfolio
        </a>
        <a href="#service" className="hover:text-title-dark">
          Service
        </a>
      </div>
    </footer>
  );
}

export default Footer;
