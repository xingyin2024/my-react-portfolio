import "./home.css";
// import Ic-arrow-black from "../asset/icon/arrow-black";
// import Ic-arrow-white from "../asset/icon/arrow-white";
// import { useEffect, useState } from "react";

import { Introduction } from "../Introduction/Introduction";
import { Projects } from "../Projects/Projects";
import { Tech } from "../Tech/Tech";
import { Skills } from "../Skills/Skills";
import { Articles } from "../Articles/Articles";
import { Contact } from "../Contact/Contact";



export const Home = () => { 
  return (
    <>
      <Introduction />
      <Projects />
      <Tech />
      <Skills/>
      <Articles />
      <Contact/>
    </>
  )
 }