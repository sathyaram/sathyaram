import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const homeplanetfund = () => {
  return (
    <>
      <Head>
        <title>Home Planet Fund | Sathya Ram</title>
        <meta name="description" content="About Home Planet Fund" />
        <meta name="next-head-count" />
        <body className="midnight homeplanetfund page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div className="website-image">
            <img src="/assets/homeplanet.png" alt="Home Planet Fund"></img>
          </div>
          <h1 className="website-name">Home Planet Fund</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    While working at Teal Media, a project I received was for
                    Home Planet Fund. Complete ground-up built in WordPress.
                    Purely theming and crafting the fields. It was a blast. Home
                    Planet Fund leverages the power of nature and the
                    stewardship role of Indigenous People and Local Communities.
                    It is also a company powered by Patagonia. Its seed money
                    and yours is what powers this company's noble mission. To
                    harnass nature to create better living.
                  </p>
                  <br></br>
                  <p>
                    The vibe of the website is meant to capture that grass
                    rootness. The animations, draw-like hover effects, textures
                    and cursor changes are but some touches I added that helped
                    ground you in the feel of the site's goal.
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
                    <li>Advanced Custom Fields</li>
                  </ul>
                </div>

                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Development</li>
                    <li>Animation / Interactions</li>
                    <li>Responsiveness</li>
                    <li>Accessibility</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Agency</label>
                  <div>Teal Media</div>
                </div>
                <div className="website-year website-info">
                  <label>Year of Creation</label>
                  <div>2023</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://homeplanetfund.org"
                  >
                    homeplanetfund.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="full-width">
            <img
              alt="homeplanetfund-one"
              loading="lazy"
              src="/websites/homeplanetfund-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="homeplanetfund-two"
              loading="lazy"
              src="/websites/homeplanetfund-two.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="homeplanetfund-three"
              loading="lazy"
              src="/websites/homeplanetfund-three.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="text-block">
            Performant across all devices and integrating colorful scroll effects. They wanted a scroll experience akin to a summer breeze in the Sahara.
          </div>
          <div className="col-2">
            <div>
              <img
                alt="homeplanetfund-four"
                loading="lazy"
                src="/websites/homeplanetfund-four.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt="homeplanetfund-five"
                loading="lazy"
                src="/websites/homeplanetfund-five.png"
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

export default homeplanetfund;
