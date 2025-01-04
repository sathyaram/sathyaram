import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const portal = () => {
  return (
    <>
      <Head>
        <title>
          Lehigh University&apos;s Campus Portal Designs | Sathya Ram
        </title>
        <meta
          name="description"
          content="AboutLehigh University's Campus Portal Designs"
        />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight portal page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">
            Lehigh University&apos;s Campus Portal Designs
          </h1>
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
                    <li>Adobe Illustrator</li>
                  </ul>
                </div>
                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Portal Management</li>
                    <li>Designer</li>
                    <li>Developer</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Launched</label>
                  <div>2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="portal-og"
              loading="lazy"
              src="/websites/portal.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div className="col">
              <img
                alt="portal-three"
                loading="lazy"
                src="/websites/portal-three.jpg"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
            <div className="col">
              <img
                alt="portal-five"
                loading="lazy"
                src="/websites/portal-five.jpg"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="portal-two"
              loading="lazy"
              src="/websites/portal-two.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="portal-four"
              loading="lazy"
              src="/websites/portal-four.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>

          <div className="full-width">
            <img
              alt="portal-six"
              loading="lazy"
              src="/websites/portal-six.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="portal-seven"
              loading="lazy"
              src="/websites/portal-seven.jpg"
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

export default portal;
