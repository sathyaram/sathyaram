import React from "react";

const loader = () => {
  return (
    <>
      <div className="loader">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <svg version="1.1" viewBox="0 0 62.5 28.7">
          <g>
            <polygon
              className="s-line"
              points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1 	"
            />
            <polyline
              className="r-line"
              points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8 	"
            />
          </g>
        </svg>
      </div>
    </>
  );
};
export default loader;
