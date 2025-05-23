import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const hhmi = () => {
  return (
    <>
      <Head>
        <title>
          Howard Hughes Medical Institute&apos;s Biointeractive | Sathya Ram
        </title>
        <meta
          name="description"
          content="About Howard Hughes Medical Institute's Biointeractive"
        />
        <meta name="next-head-count" />
        <body className="midnight hhmi page website" />
      </Head>
      <Menu />
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image
              width={1200}
              height={2000}
              src="/websites/assets/howie.png"
              alt="Howard Hughes Medical Institute's Biointeractive"
              priority
            ></Image>
          </div>
          <h1 className="website-name">
            Howard Hughes Medical Institute&apos;s Biointeractive
          </h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                  This was a massive undertaking - building out the frontend for a small Netflix®-like repository for science videos.  BioInteractive is a leading provider of free classroom resources and professional development for high school and undergraduate biology educators.
                  </p>
                  <br></br>
                  <p>
                  They aim to connect students to big ideas in biology and promote engagement to transform science education into a creative, interdisciplinary endeavor that reflects the excitement of real research. Funded by Howard Hughes himself and his Medical Institute, it gathers a myriad of disciplines of sciences and serves it as a valuable resource.
                  </p>
                  <br></br>
                  <p>
                  The pages are extensive but this was a fun project. Still stands the test of time - the color schemes and div placements hold up on all browsers.
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
                    <li>JavaScript</li>
                    <li>Custom CSS Theming</li>
                  </ul>
                </div>

                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Theme Creation</li>
                    <li>File Management</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Agency</label>
                  <div>Forum One</div>
                </div>
                <div className="year info">
                  <label>Launched</label>
                  <div>2021</div>
                </div>
                <div className="url info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://biointeractive.org"
                  >
                    biointeractive.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="biointeractive-one"
              loading="lazy"
              src="/websites/hhmi/hhmi-one.png"
            ></Image>
          </div>
          <div className="col-2">
            <div>
              <Image
                width={1200}
                height={2000}
                alt="biointeractive-three"
                loading="lazy"
                src="/websites/hhmi/hhmi-three.png"
              ></Image>
            </div>
            <div>
              <Image
                width={1200}
                height={2000}
                alt="biointeractive-two"
                loading="lazy"
                src="/websites/hhmi/hhmi-two.png"
              ></Image>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="biointeractive-five"
              loading="lazy"
              src="/websites/hhmi/hhmi-five.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="biointeractive-four"
              loading="lazy"
              src="/websites/hhmi/hhmi-four.png"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default hhmi;
