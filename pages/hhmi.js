import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const hhmi = () => {
  return (
    <>
      <Head>
        <title>Howard Hughes' Biointeractive | Sathya Ram</title>
        <meta
          name="description"
          content="About Howard Hughes' Biointeractive"
        />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight hhmi page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div class="website-image">
            <img
              src="/assets/howie.svg"
              alt="Howard Hughes' Biointeractive"
            ></img>
          </div>
          <h1 className="website-name">Howard Hughes' Biointeractive</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div class="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    I designed the Kendra Scott website and the product
                    customization user flow and experience. The team was looking
                    for a design that felt exciting yet friendly. I created
                    prototypes and designs for the customization tool.
                  </p>
                  <br></br>
                  <p>
                    I designed the Kendra Scott website and the product
                    customization user flow and experience. The team was looking
                    for a design that felt exciting yet friendly. I created
                    prototypes and designs for the customization tool.
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
              alt=""
              loading="lazy"
              src="/websites/biointeractive-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>

          <div className="col-2">
            <div>
              <img
                alt=""
                loading="lazy"
                src="/websites/biointeractive-three.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt=""
                loading="lazy"
                src="/websites/biointeractive-two.png"
                className="dark-mode-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/biointeractive-five.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/biointeractive-four.png"
              sizes="100vw"
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
