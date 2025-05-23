import React from "react";
import Head from "next/head";
import Image from "next/image";
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
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image
              width={1200}
              height={1200}
              src="/websites/assets/brookings.webp"
              alt="The Brookings Institute"
              priority
            ></Image>
          </div>
          <h1 className="website-name">The Brookings Institute</h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    I can't believe I had the opportunity to do the frontend for
                    The Brookings Institute. It's a nonprofit organization based
                    in Washington, D.C., with a mission to conduct in-depth,
                    nonpartisan research to improve policy and governance at
                    local, national, and global levels. They are dedicated to
                    finding bold, pragmatic solutions for societal challenges.
                  </p>
                  <br></br>
                  <p>
                    This site took me and another front-end developer to pull
                    off. Over 400+ pages and growing, all themed from just a few
                    well-crafted (S)CSS files.
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
                  </ul>
                </div>

                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Frontend Development</li>
                    <li>File Management</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Agency</label>
                  <div>Teal Media</div>
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
                    href="https://brookings.edu"
                  >
                    brookings.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="brookings-one"
              loading="lazy"
              src="/websites/brookings/brookings-one.png"
            ></Image>
          </div>
          <div className="col-2">
            <div>
              <Image
                width={1200}
                height={2000}
                alt="brookings-three"
                loading="lazy"
                src="/websites/brookings/brookings-three.png"
              ></Image>
            </div>
            <div>
              <Image
                width={1200}
                height={2000}
                alt="brookings-two"
                loading="lazy"
                src="/websites/brookings/brookings-two.png"
              ></Image>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="brookings-four"
              loading="lazy"
              src="/websites/brookings/brookings-four.png"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default brookings;
