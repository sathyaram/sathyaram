import React from "react";

const Hero = () => {
  const ocean = (e) => {
    document.body.classList.toggle("ocean");
  };

  const midnight = (e) => {
    document.body.classList.toggle("midnight");
  };

  return (
    <>
      <figure role="banner">
        <div className="ocean"></div>
        <div className="planets">
          <div className="planet planet1"></div>
          <div className="planet planet2"></div>
          <div className="planet planet3"></div>
          <div className="planet planet4"></div>
          <div className="planet planet5"></div>
        </div>
      </figure>
      <header role="header">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="hero">
          <div className="pronounce">Sa-thee-uh · Ram</div>
          <h1>
            <span>S</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>y</span>
            <span>a</span>
            <span>R</span>
            <span>a</span>
            <span>m</span>
          </h1>
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
            <span>D</span>
            <span>i</span>
            <span>g</span>
            <span>i</span>
            <span>t</span>
            <span>a</span>
            <span>l</span>
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
        </div>
      </header>
    </>
  );
};

export default Hero;
