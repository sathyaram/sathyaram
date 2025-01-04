import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const lehigh2018 = () => {
  return (
    <>
      <Head>
        <title>Lehigh2018 Web Theme Style Guide | Sathya Ram</title>
        <meta
          name="description"
          content="About Lehigh2018 Web Theme Style Guide"
        />
        <meta name="next-head-count" />
        <body className="midnight portal page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">Lehigh2018 Web Theme Style Guide</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    While at Lehigh University, I was tasked to create the new
                    Lehigh2018 website theme that would be used across over a
                    100 department websites, I decided it would be a great
                    opportunity to help out users and create modular displays
                    for content creators. These &apos;content sections&apos; are
                    pre-styled components like an Image Slider, Call to Action
                    buttons, Card/Photo grids, Blockquotes, etcs that users can
                    easily add to their web pages with a click of a button in
                    Drupal. It was wildly successful and is widely used!
                  </p>
                  <br></br>
                  <p>
                    It was an absolute pleasure creating these - I also created
                    a PDF so content creators could browse how the Content
                    Sections look as well as their functionality and use cases.
                    Definitely take a look!
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="website-role website-info">
                  <label>Role</label>
                  <div>Senior Web Developer (Portal)</div>
                </div>
                <div className="website-stack website-info">
                  <label>Stack</label>
                  <ul>
                    <li>Adobe Illustrator 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Designer</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Designed In</label>
                  <div>2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="lehigh2018-one"
              loading="lazy"
              src="/websites/lehigh2018-one.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div className="col">
              <img
                alt="lehigh2018-two"
                loading="lazy"
                src="/websites/lehigh2018-two.jpg"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
            <div className="col">
              <img
                alt="lehigh2018-three"
                loading="lazy"
                src="/websites/lehigh2018-three.jpg"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="lehigh2018-four"
              loading="lazy"
              src="/websites/lehigh2018-four.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="lehigh2018-five"
              loading="lazy"
              src="/websites/lehigh2018-five.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="lehigh2018-six"
              loading="lazy"
              src="/websites/lehigh2018-six.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="lehigh2018-seven"
              loading="lazy"
              src="/websites/lehigh2018-seven.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
        </div>
        <div className="full-width">
          <img
            alt="lehigh2018-eight"
            loading="lazy"
            src="/websites/lehigh2018-eight.png"
            sizes="100vw"
            className="full-img"
          ></img>
        </div>
        <div className="full-width">
          <img
            alt="lehigh2018-nine"
            loading="lazy"
            src="/websites/lehigh2018-nine.png"
            sizes="100vw"
            className="full-img"
          ></img>
        </div>
        <div className="full-width">
          <img
            alt="lehigh2018-ten"
            loading="lazy"
            src="/websites/lehigh2018-ten.png"
            sizes="100vw"
            className="full-img"
          ></img>
        </div>
        <div className="full-width">
          <img
            alt="lehigh2018-eleven"
            loading="lazy"
            src="/websites/lehigh2018-eleven.png"
            sizes="100vw"
            className="full-img"
          ></img>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default lehigh2018;
