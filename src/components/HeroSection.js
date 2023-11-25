import React from "react";

const HeroSection = (props) => {
  return (
    <>
      <section
        className="text-center"
        style={{
          backgroundColor: `${props.bgColor}`,
          color: "#000",
          padding: "65px 0",
        }}
      >
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1
              className=" font-weight-bold "
              style={{ color: `${props.color}` }}
            >
              {props.title}
            </h1>
            <p style={{ color: `${props.color}` }}>{props.subTitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
