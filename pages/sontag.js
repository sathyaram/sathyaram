import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const sontag = () => {
  return (
    <>
      <Head>
        <title>The Sontag Foundation | Sathya Ram</title>
        <meta name="description" content="About Sontag Foundation" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight sontag page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div class="website-image">
            <img src="/assets/sontag.png" alt="The Sontag Foundation"></img>
          </div>
          <h1 className="website-name">The Sontag Foundation</h1>
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
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Push10</div>
                </div>
                <div className="website-year website-info">
                  <label>Published</label>
                  <div>2021</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sontagfoundation.org"
                  >
                    sontagfoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/sontag-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/sontag-two.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div>
              <img
                alt=""
                loading="lazy"
                src="/websites/sontag-four.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt=""
                loading="lazy"
                src="/websites/sontag-five.png"
                className="dark-mode-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/sontag-three.png"
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

export default sontag;
