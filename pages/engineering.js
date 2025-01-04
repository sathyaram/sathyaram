import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const engineering = () => {
  return (
    <>
      <Head>
        <title>Lehigh&apos;s Engineering Department Web Designs | Sathya Ram</title>
        <meta name="description" content="About Lehigh's Engineering Department Designs" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight engineering page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">Lehigh&apos;s Engineering Department Web Designs</h1>
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
                    <li>Adobe Illustrator</li>
                    <li>Adobe Photoshop</li>
                  </ul>
                </div>
                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Designer</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Designed In</label>
                  <div>2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <img
              alt="engineering-one"
              loading="lazy"
              src="/websites/lehighengineering.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div> 
          <div className="full-width">
            <img
              alt="engineering-four"
              loading="lazy"
              src="/websites/lehigh-four.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-two"
              loading="lazy"
              src="/websites/engineering-two.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-three"
              loading="lazy"
              src="/websites/engineering-three.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-four"
              loading="lazy"
              src="/websites/engineering-four.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-five"
              loading="lazy"
              src="/websites/engineering-five.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-six"
              loading="lazy"
              src="/websites/engineering-six.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-seven"
              loading="lazy"
              src="/websites/engineering-seven.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-eight"
              loading="lazy"
              src="/websites/engineering-eight.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-nine"
              loading="lazy"
              src="/websites/engineering-nine.jpg"
              sizes="100vw"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-ten"
              loading="lazy"
              src="/websites/engineering-ten.jpg"
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

export default engineering;



