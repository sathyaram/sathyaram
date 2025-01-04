import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const fudtruk = () => {
  return (
    <>
      <Head>
        <title>Fudtruk Branding and Designs | Sathya Ram</title>
        <meta name="description" content="About Fudtruk Branding and Designs" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight fudtruk page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">Fudtruk Branding and Designs</h1>
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
                  <div>Senior Web Developer (Portal)</div>
                </div>
                <div className="website-stack website-info">
                  <label>Stack</label>
                  <ul>
                    <li>Drupal 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                    <li>Luminius 7</li>
                  </ul>
                </div>
                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Portal Management</li>
                    <li>Website Management</li>
                    <li>Designer</li>
                    <li>Developer</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Designed In</label>
                  <div>2017-2020</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-two.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width full-small">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-three.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-four.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-five.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width full-small">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-six.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/fudtruk-seven.jpg"
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

export default fudtruk;



