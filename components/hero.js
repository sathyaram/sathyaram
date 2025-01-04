import React from "react";

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
      <header>
        <figure role="banner">
          <div className="planet"></div>
          <div className="planet-two"></div>
          <div className="planet-three"></div>
          <div className="planet-four"></div>
          <div className="planet-five"></div>
          <div className="planet-six"></div>
          <div className="planet-seven"></div>
          <div className="planet-eight"></div>
        </figure>

        <div className="hero">
          <div className="pronounce">Sa-thee-uh · Ram</div>
          <h1>
            <span>S</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>y</span>
            <span>a</span>
            {/* <span>&nbsp;</span> */}
            <span>R</span>
            <span>a</span>
            <span>m</span>
          </h1>
          <div className="website-version">v7.0</div>
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
          {/* <nav className="social-media" role="navigation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/sathya.ram"
            >
              <svg viewBox="0 0 512 512">
                <g>
                  <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                  <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                  <circle cx="351.5" cy="160.5" r="21.5"></circle>
                </g>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codepen.io/sathyaram"
            >
              <svg viewBox="0 0 512 512">
                <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"></path>
              </svg>
              <span>Codepen</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/sathyaram"
            >
              <svg viewBox="0 0 512 512">
                <path d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z"></path>
              </svg>
              <span>Dribbble</span>
            </a>
          </nav> */}
        </div>
      </header>
    </>
  );
};

export default Hero;
