import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="border rounded-3">
        <div>
          <img
            className="rounded-3"
            src={props.image}
            style={{ width: "100%" }}
            alt="card"
          />
        </div>

        <div className="px-3 py-3 ">
          <div>
            <h4>{props.title}</h4>
          </div>
          <div>
            <p>Discover the beauty of {props.title}.</p>
          </div>

          <div>
            <Link to={props.link} className="btn btn-primary btn-md">
              {" "}
              Learn More{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
