import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const hhmi = () => {
  return (
    <>
      <Head>
        <title>
          Howard Hughes Medical Institute&apos;s Biointeractive | Sathya Ram
        </title>
        <meta
          name="description"
          content="About Howard Hughes Medical Institute's Biointeractive"
        />
        <meta name="next-head-count" />
        <body className="midnight hhmi page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img
              src="/websites/assets/howie.png"
              alt="Howard Hughes Medical Institute's Biointeractive"
            ></img>
          </div>
          <h1 className="website-name">
            Howard Hughes Medical Institute&apos;s Biointeractive
          </h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    A massive undertaking - building out the frontend for small
                    Netflix-like repository for science videos. .BioInteractive
                    is a leading provider of free classroom resources and
                    professional development for high school and undergraduate
                    biology educators. They aim to connect students to big ideas
                    in biology and promote engagement through the science
                    practices to transform science education into a creative,
                    interdisciplinary endeavor that reflects the excitement of
                    real research. Funded by Howard Hughes himself and his
                    Medical Institute, it gathers a myriad of disciplines of
                    sciences and gives it out as a resource.
                  </p>
                  <br></br>
                  <p>
                    The pages are extensive but this was a fun project. Still
                    stands the test of time - the color schemes and div
                    placements hold up on all browsers.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="website-role website-info">
                  <label>Role</label>
                  <div>Front-end Developer</div>
                </div>

                <div className="website-stack website-info">
                  <label>Stack</label>
                  <ul>
                    <li>WordPress</li>
                    <li>JavaScript</li>
                    <li>Custom CSS Theming</li>
                  </ul>
                </div>

                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Theme Creation</li>
                    <li>File Management</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Forum One</div>
                </div>
                <div className="website-year website-info">
                  <label>Launched</label>
                  <div>2021</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://biointeractive.org"
                  >
                    biointeractive.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="biointeractive-one"
              loading="lazy"
              src="/websites/hhmi/hhmi-one.png"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div>
              <img
                alt="biointeractive-three"
                loading="lazy"
                src="/websites/hhmi/hhmi-three.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt="biointeractive-two"
                loading="lazy"
                src="/websites/hhmi/hhmi-two.png"
                className="dark-mode-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="biointeractive-five"
              loading="lazy"
              src="/websites/hhmi/hhmi-five.png"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="biointeractive-four"
              loading="lazy"
              src="/websites/hhmi/hhmi-four.png"
              className="full-img"
            ></img>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default hhmi;
