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
        <link rel="icon" href="/favicon.ico" />
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
              alt=""
              loading="lazy"
              src="/websites/homeplanetfund-one.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/homeplanetfund-two.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/homeplanetfund-three.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt=""
              loading="lazy"
              src="/websites/homeplanetfund-two.png"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="text-block">
            After a couple years of agency experience, it became clear that web
            design and development was my passion. So, I decided to learn
            programming fundamentals in a formal setting, at a coding bootcamp
            called General Assembly, where I learned JavaScript and React.js in
            a rigorous environment.
          </div>
          <div className="col-2">
            <div>
              <img
                alt=""
                loading="lazy"
                src="/websites/homeplanetfund-four.png"
                className="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt=""
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
