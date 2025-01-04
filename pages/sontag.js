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
        <meta name="next-head-count" />
        <body className="midnight sontag page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img loading="lazy" src="/assets/sontag.png" alt="The Sontag Foundation"></img>
          </div>
          <h1 className="website-name">The Sontag Foundation</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    While working at Push10, The Sontag Foundation came to us and I was tasked with crafting the entire website from scratch in WordPress, while also theming it. The story of The Sontag Foundation is really the story of Rick and Susan Sontag and their ability to turn adversity into a benefit for many other people who have lived with the scourge of brain cancer.
                  </p>
                  <br></br>
                  <p>
                    The idea was cleanly and effectively display information on all devices. 
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
                    <li>Extensive Custom Fields</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Push10</div>
                </div>
                <div className="website-year website-info">
                  <label>Published</label>
                  <div>2020</div>
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
              alt="sontag-one"
              loading="lazy"
              src="/websites/sontag-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="sontag-two"
              loading="lazy"
              src="/websites/sontag-two.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div>
              <img
                alt="sontag-four"
                loading="lazy"
                src="/websites/sontag-four.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt="sontag-five"
                loading="lazy"
                src="/websites/sontag-five.png"
                className="dark-mode-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="sontag-three"
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
