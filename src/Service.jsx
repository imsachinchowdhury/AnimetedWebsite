import React from "react";
// import web from "./images/imag1.png";
import Card from './Card';
import Sdata from './Sdata';
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Cards</h1>
      </div>
      <div className="container-fulid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val,index)=>{
                return <Card 
                  imgsrc={val.imgsrc}
                  title = {val.title}
                  key = {index}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
