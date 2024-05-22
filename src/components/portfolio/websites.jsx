import company from "../../assets/websites images/Company.png";
import fb from "../../assets/websites images/Fake facebook post.png";
import drake from "../../assets/websites images/Drake Home PC.png";
import iti from "../../assets/websites images/ITI scroll.png";
import quiz from "../../assets/websites images/quiz-app.png";
import tic_tac_tao from "../../assets/websites images/tic tac tao.png";
import social_media from "../../assets/websites images/Social-Media.png";
import ecommerce from "../../assets/websites images/Ecommerce.png";

import react from "../../assets/logos/React.png";
import redux from "../../assets/logos/redux.png";
import axios from "../../assets/logos/axios.png";
import tailwind from "../../assets/logos/tailwind.png";
import css from "../../assets/logos/css.png";
import html from "../../assets/logos/html.png";
import javascript from "../../assets/logos/javascript.png";
import react_router from "../../assets/logos/react-router-dom.png";
import material from "../../assets/logos/mui material.png";
import framer_motion from "../../assets/logos/framer-motion.png";
import Gsap from "../../assets/logos/gsap.png";
import bootstrap from "../../assets/logos/bootstrap.png";

export const websites = [
  {
    name: "Social Media",
    img: social_media,
    technologies: [
      react,
      css,
      tailwind,
      redux,
      axios,
      react_router,
      framer_motion,
    ],
    link: "https://react-social-media-app-sand.vercel.app/home",
  },
  {
    name: "Drake Related",
    img: drake,
    technologies: [react, css, tailwind, redux, axios, react_router],
    link: "https://drakerelated.vercel.app/",
  },
  {
    name: "Fake Facebook Post",
    img: fb,
    technologies: [react, css, tailwind, material],
    link: "https://fake-facebook-post.vercel.app/",
  },
  {
    name: "ITI",
    img: iti,
    technologies: [html, css, javascript, tailwind],
    link: "https://company-page-eight.vercel.app/",
  },
  {
    name: "Ecommerce page",
    img: ecommerce,
    technologies: [react, css, tailwind, Gsap],
    link: "https://ecommerce-company-plum.vercel.app/",
  },
  {
    name: "Company page",
    img: company,
    technologies: [react, css, tailwind, Gsap],
    link: "https://iti-profile.vercel.app/",
  },
  {
    name: "Quiz App",
    img: quiz,
    technologies: [react, css],
    link: "https://quizapp-sable-delta.vercel.app/",
  },
  {
    name: "tic tac toe",
    img: tic_tac_tao,
    technologies: [html, css, javascript, bootstrap],
    link: "https://gorgeous-kulfi-32925f.netlify.app/",
  },
];
