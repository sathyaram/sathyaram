import React from "react";
import Head from "next/head";
import Image from "next/image";
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
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image
              width={1200}
              height={2000}
              priority
              src="/websites/assets/homeplanet.png"
              alt="Home Planet Fund"
            ></Image>
          </div>
          <h1 className="website-name">Home Planet Fund</h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    An example of a ground-up build in WordPress I carried out
                    was this website for Home Planet Fund. Pure website theming and
                    crafting of all fields from scratch. It was a blast! Home Planet Fund
                    leverages the power of nature and the stewardship role of
                    Indigenous People and Local Communities.
                  </p>
                  <br></br>
                  <p>
                    It is also a company powered by Patagonia and sustained by
                    donors: To harness nature to create better living. The vibe
                    of the website is meant to capture that grass rootness.
                  </p>
                  <br></br>
                  <p>
                    The animations, draw-like hover effects, textures and cursor
                    changes some touches I added that I hope convey that
                    feeling.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="role info">
                  <label>Role</label>
                  <div>Front-end Developer</div>
                </div>
                <div className="stack info">
                  <label>Stack</label>
                  <ul>
                    <li>WordPress</li>
                    <li>Custom JavaScript</li>
                    <li>HTML / SCSS, CSS</li>
                    <li>Advanced Custom Fields</li>
                  </ul>
                </div>
                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Development</li>
                    <li>Animation / Interactions</li>
                    <li>Responsiveness</li>
                    <li>Accessibility</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Agency</label>
                  <div>Teal Media</div>
                </div>
                <div className="year info">
                  <label>Launched</label>
                  <div>2023</div>
                </div>
                <div className="url info">
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
            <Image
              width={1200}
              height={2000}
              alt="homeplanetfund-one"
              loading="lazy"
              src="/websites/homeplanetfund/homeplanetfund-one.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="homeplanetfund-two"
              loading="lazy"
              src="/websites/homeplanetfund/homeplanetfund-two.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="homeplanetfund-three"
              loading="lazy"
              src="/websites/homeplanetfund/homeplanetfund-three.png"
            ></Image>
          </div>
          <div className="text-block">
            Performant across all devices and integrating colorful scroll
            effects. They wanted a scroll experience akin to a summer breeze in
            the Sahara.
          </div>
          <div className="col-2">
            <div>
              <Image
                width={1200}
                height={2000}
                alt="homeplanetfund-four"
                loading="lazy"
                src="/websites/homeplanetfund/homeplanetfund-four.png"
              ></Image>
            </div>
            <div>
              <Image
                width={1200}
                height={2000}
                alt="homeplanetfund-five"
                loading="lazy"
                src="/websites/homeplanetfund/homeplanetfund-five.png"
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default homeplanetfund;
