import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const brookings = () => {
  return (
    <>
      <Head>
        <title>The Brookings Institute | Sathya Ram</title>
        <meta name="description" content="About The Brookings Institute" />
        <meta name="next-head-count" />
        <body className="midnight brookings page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img
              src="/assets/brookings.webp"
              alt="The Brookings Institute"
            ></img>
          </div>
          <h1 className="website-name">The Brookings Institute</h1>
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
                    <li>Custom JavaScript</li>
                    <li>HTML / SCSS, CSS</li>
                  </ul>
                </div>

                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Frontend Development</li>
                    <li>File Management</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Teal Media</div>
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
                    href="https://brookings.org"
                  >
                    brookings.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="brookings-one"
              loading="lazy"
              src="/websites/brookings-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="col-2">
            <div>
              <img
                alt="brookings-three"
                loading="lazy"
                src="/websites/brookings-three.png"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
            <div>
              <img
                alt="brookings-two"
                loading="lazy"
                src="/websites/brookings-two.png"
                sizes="100vw"
                className="full-img"
              ></img>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="brookings-four"
              loading="lazy"
              src="/websites/brookings-four.png"
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

export default brookings;
