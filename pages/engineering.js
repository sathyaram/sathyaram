import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const engineering = () => {
  return (
    <>
      <Head>
        <title>
          Lehigh University&apos;s College of Engineering Web Designs | Sathya
          Ram
        </title>
        <meta
          name="description"
          content="About Lehigh University's College of Engineering Web Designs"
        />
        <meta name="next-head-count" />
        <body className="midnight engineering page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">
            Lehigh University&apos;s College of Engineering Web Designs
          </h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    I had the opportunity to redesign Lehigh&apos;s Engineering
                    website, the crowning jewel of web design opportunities at
                    Lehigh. Lehigh is rooted in engineering and being able to
                    help rebrand and recreate their core was intense and
                    amazing. This was a small style guide I put together for the
                    website. I attempted to make things more modern - vibrant
                    blue gradients, easily palatable colors, bold fonts and
                    weights while still making the site and experience navigable
                    for all prospectives.
                  </p>
                  <br></br>
                  <p>
                    My defining web design moment. This is Lehigh&apos;s Engineering
                    website. Easily one of the most ambitious, and involved
                    sites I&apos;ve ever designed. It&apos;s still in development. I
                    really hope you like it.
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
              src="/designs/assets/lehighengineering.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-four"
              loading="lazy"
              src="/designs/engineering/engineering.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-two"
              loading="lazy"
              src="/designs/engineering/engineering-two.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-three"
              loading="lazy"
              src="/designs/engineering/engineering-three.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-four"
              loading="lazy"
              src="/designs/engineering/engineering-four.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-five"
              loading="lazy"
              src="/designs/engineering/engineering-five.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-six"
              loading="lazy"
              src="/designs/engineering/engineering-six.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-seven"
              loading="lazy"
              src="/designs/engineering/engineering-seven.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-eight"
              loading="lazy"
              src="/designs/engineering/engineering-eight.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-nine"
              loading="lazy"
              src="/designs/engineering/engineering-nine.jpg"
              className="full-img"
            ></img>
          </div>
          <div className="full-width">
            <img
              alt="engineering-ten"
              loading="lazy"
              src="/designs/engineering/engineering-ten.jpg"
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
