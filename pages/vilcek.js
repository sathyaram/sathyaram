import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const vilcek = () => {
  return (
    <>
      <Head>
        <title>Vilcek Foundation | Sathya Ram</title>
        <meta name="description" content="About Vilcek Foundation" />
        <meta name="next-head-count" />
        <body className="midnight vilcek page website" />
      </Head>
      <Menu />
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image width={1200} height={2000}
              priority
              src="/websites/assets/vilcek.png"
              alt="Vilcek Foundation"
            />
          </div>
          <h1 className="website-name">Vilcek Foundation</h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    While working at Forum One, I had the honor of being tasked
                    to do the entire frontend of the Vilcek Foundation&apos;s
                    brand new website. The Vilcek Foundation raises awareness of
                    immigrant contributions in the United States and fosters
                    appreciation of the arts and sciences. 
                    </p>
                  <br></br>
                  <p>
                    Through their prizes,
                    they reward immigrant artists and scientists at every stage
                    of their careers. The build involved extensive image
                    galleries and content types for various groupings of art
                    that Vilcek wanted to organize, as well as keep track of all
                    their grantees, donors and art contributions.
                  </p>
                  <br></br>
                  <p>
                    Being able to theme a majority of the project myself, I was
                    able to build out clean SCSS directories filled with
                    different ways to run our different gallery layouts. Even in
                    2025, this website is thriving, clean and preformant -
                    reflective of a lot of the longevity I try to instill in
                    websites.
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
                    <li>HTML / CSS, SCSS</li>
                    <li>SCSS Theming</li>
                    <li>Advanced Custom Fields</li>
                  </ul>
                </div>
                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Frontend Development</li>
                    <li>Theme Creation</li>
                    <li>File Management</li>
                    <li>Animation / Interactions</li>
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
                    href="https://vilcek.org"
                  >
                    vilcek.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="vilcek-one"
              loading="lazy"
              src="/websites/vilcek/vilcek-one.png"
            ></Image>
          </div>
          <div className="col-3">
            <Image
              width={1000}
              height={4000}
              alt="vilcek-four"
              loading="lazy"
              src="/websites/vilcek/vilcek-four.png"
            ></Image>
            <Image
              width={1000}
              height={4000}
              alt="vilcek-five"
              loading="lazy"
              src="/websites/vilcek/vilcek-five.png"
            ></Image>
            <Image
              width={1000}
              height={4000}
              alt="vilcek-six"
              loading="lazy"
              src="/websites/vilcek/vilcek-six.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="vilcek-seven"
              loading="lazy"
              src="/websites/vilcek/vilcek-seven.png"
            ></Image>
          </div>
          <div className="col-2">
            <div>
              <Image
                width={1000}
                height={4000}
                alt="vilcek-two"
                loading="lazy"
                src="/websites/vilcek/vilcek-two.png"
              ></Image>
            </div>
            <div>
              <Image
                width={1000}
                height={4000}
                alt="vilcek-three"
                loading="lazy"
                src="/websites/vilcek/vilcek-three.png"
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default vilcek;
