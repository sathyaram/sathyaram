import React from "react";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";

const Hero = () => {
  const ocean = (e) => {
    document.body.classList.toggle("ocean");
  };

  const midnight = (e) => {
    document.body.classList.toggle("midnight");
  };

  return (
    <>
      <div id="constellation" className="constellation" role="banner">
        <div className="planet"></div>
        <div className="planet-two"></div>
        <div className="planet-three"></div>
        <div className="planet-four"></div>
        <div className="planet-five"></div>
        <div className="planet-six"></div>
        <div className="planet-seven"></div>
        <div className="planet-eight"></div>
      </div>
      <header className="hero">
        <div className="pronounce">Sa-thee-uh · Ram</div>
        <h1>
          <div>
            <span>S</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>y</span>
            <span>a</span>
          </div>
          <span className="nbsp">&nbsp;</span>
          <div>
            <span>R</span>
            <span>a</span>
            <span>m</span>
          </div>
        </h1>
        <div className="version">v7.2</div>
        <h2>
          <span>W</span>
          <span>e</span>
          <span>b</span>
          &nbsp;
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span className="x">&nbsp;×&nbsp;</span>
          <span>U</span>
          <span>I</span>
          <span>/</span>
          <span>G</span>
          <span>r</span>
          <span>a</span>
          <span>p</span>
          <span>h</span>
          <span>i</span>
          <span>c</span>
          &nbsp;
          <span>D</span>
          <span>e</span>
          <span>s</span>
          <span>i</span>
          <span>g</span>
          <span>n</span>
          <span>e</span>
          <span>r</span>
          <span className="x">&nbsp;×&nbsp;</span>
          <span>P</span>
          <span>h</span>
          <span>o</span>
          <span>t</span>
          <span>o</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span>p</span>
          <span>h</span>
          <span>e</span>
          <span>r</span>
        </h2>
      </header>
    </>
  );
};

export default Hero;
