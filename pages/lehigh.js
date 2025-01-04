import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const lehigh = () => {
  return (
    <>
      <Head>
        <title>
          Lehigh University&apos;s College of Art, Architecture & Design |
          Sathya Ram
        </title>
        <meta
          name="description"
          content="About Lehigh University's College of Art, Architecture & Design"
        />
        <meta name="next-head-count" />
        <body className="midnight lehigh page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img
              src="/assets/lehighuniversity.png"
              alt="Lehigh University"
            ></img>
          </div>
          <h1 className="website-name">
            Lehigh University&apos;s College of Art, Architecture & Design
          </h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    While working at Lehigh University, I was honored with the
                    opportunity to redesign the College of Arts, Architecture
                    and Design&apos;s website. I received a BA at Lehigh - in Design
                    and Studio Art within the College of Arts & Science, so I
                    understood how important this opportunity was to really
                    highlight important information. This was the result!
                    Completely new color scheme, modern branding, as well as a
                    fresh, contemporary look that brought it out of the stone
                    ages.
                  </p>
                  <br></br>
                  <p>It&apos;s still in production, but here are the designs!</p>
                </div>
              </div>
              <div className="col">
                <div className="website-role website-info">
                  <label>Role</label>
                  <div>Senior Web Developer</div>
                </div>

                <div className="website-stack website-info">
                  <label>Stack</label>
                  <ul>
                    <li>Drupal 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>

                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Website Management</li>
                    <li>Designer</li>
                    <li>Developer</li>
                  </ul>
                </div>

                <div className="website-year website-info">
                  <label>Launched</label>
                  <div>2018</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <div className="links">
                    <a
                      className="website-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://aad.lehigh.edu"
                    >
                      aad.lehigh.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="aad-one"
              loading="lazy"
              src="/websites/aad-one.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="aad-two"
              loading="lazy"
              src="/websites/lehigh-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="aad-three"
              loading="lazy"
              src="/websites/aad-three.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="aad-four"
              loading="lazy"
              src="/websites/aad-four.jpg"
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

export default lehigh;
