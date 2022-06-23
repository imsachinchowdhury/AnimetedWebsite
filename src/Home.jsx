import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/imag1.png";
import Common from './Common';
const Home = () => {
  return (
    <>
       <Common name="Grow Your Business With " imgsrc={web} visit='/service' btname='Get Started'/>
    </>
  );
};
export default Home;
