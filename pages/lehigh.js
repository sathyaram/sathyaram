import React from "react";
import Head from "next/head";
import Image from "next/image";
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
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image
              width={1200}
              height={2000}
              src="/websites/assets/lehighuniversity.png"
              alt="Lehigh University"
              priority
            />
          </div>
          <h1 className="website-name">
            Lehigh University&apos;s College of Art, Architecture & Design
          </h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    While working at Lehigh University, I was honored with the
                    opportunity to redesign the College of Arts, Architecture
                    and Design&apos;s website.
                  </p>
                  <br></br>
                  <p>
                    I received a BA at Lehigh - in Design and Studio Art within
                    the College of Arts & Science, so I understood how important
                    this opportunity was to really highlight important
                    information.
                  </p>
                  <br></br>
                  <p>
                    This was the result! Completely new color scheme, modern
                    branding, as well as a fresh, contemporary look that brought
                    it out of the stone ages.
                  </p>
                  <br></br>
                  <p>
                    It&apos;s still in production, but here are the designs!
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="role info">
                  <label>Role</label>
                  <div>Senior Web Developer</div>
                </div>

                <div className="stack info">
                  <label>Stack</label>
                  <ul>
                    <li>Drupal 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>

                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Website Management</li>
                    <li>Designer</li>
                    <li>Developer</li>
                  </ul>
                </div>

                <div className="year info">
                  <label>Launched</label>
                  <div>2018</div>
                </div>
                <div className="url info">
                  <label>Live Website</label>
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
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="aad-one"
              loading="lazy"
              src="/websites/lehigh/lehigh-aad-designs-one.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="aad-two"
              loading="lazy"
              src="/websites/lehigh/lehigh-aad-designs-two.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="aad-three"
              loading="lazy"
              src="/websites/lehigh/lehigh-aad-designs-three.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="aad-four"
              loading="lazy"
              src="/websites/lehigh/lehigh-aad-designs-four.jpg"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default lehigh;
