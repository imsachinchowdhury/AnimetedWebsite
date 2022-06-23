import React from "react";
import { NavLink } from "react-router-dom";
// import web from "./images/imag1.png";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flax align-items-center">
        <div className="container-fulid ">
          <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-9 order-2 order-lg-1 d-flex flex-column">
                <h1>
                {props.name}
                  <strong className="brand-name"> CoderSachin</strong>
                </h1>
                <h2 className="my-3">
                  We are the team of telented developer making website
                </h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn btn-primary btn-get-started">
                    {props.btname}
                  </NavLink>
                </div>
              </div>
              
              <div className="col-md-6 order-1 order-lg-2 header-img">
                <img src={props.imgsrc} className="img-flud animated" width="100%" alt="Common page"/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
