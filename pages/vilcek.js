import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const vilcek = () => {
  return (
    <>
      <Head>
        <title>Vilcek Foundation | Sathya Ram</title>
        <meta name="description" content="About Vilcek Foundation" />
        <meta name="next-head-count" />
        <body className="midnight vilcek page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img src="/assets/vilcek.png" alt="Vilcek Foundation"></img>
          </div>
          <h1 className="website-name">Vilcek Foundation</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
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
                    <li>HTML / CSS, Bootstrap</li>
                    <li>SCSS Theming</li>
                    <li>Advanced Custom Fields</li>
                  </ul>
                </div>

                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Theme Creation</li>
                    <li>File Management</li>
                    <li>Animation / Interactions</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Forum One</div>
                </div>
                <div className="website-year website-info">
                  <label>Year of Creation</label>
                  <div>2021</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vilcek.org"
                  >
                    vilcek.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="vilcek-one"
              loading="lazy"
              src="/websites/vilcek-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-3">
            <img
              alt="vilcek-four"
              loading="lazy"
              src="/websites/vilcek-four.png"
              className="dark-mode-img"
            ></img>
            <img
              alt="vilcek-five"
              loading="lazy"
              src="/websites/vilcek-five.png"
              className="dark-mode-img"
            ></img>
            <img
              alt="vilcek-six"
              loading="lazy"
              src="/websites/vilcek-six.png"
              className="dark-mode-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="vilcek-seven"
              loading="lazy"
              src="/websites/vilcek-seven.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div>
              <img
                alt="vilcek-two"
                loading="lazy"
                src="/websites/vilcek-two.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt="vilcek-three"
                loading="lazy"
                src="/websites/vilcek-three.png"
                className="dark-mode-img"
              ></img>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default vilcek;
