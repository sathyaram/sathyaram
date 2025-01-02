import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const lehigh = () => {
  return (
    <>
      <Head>
        <title>Lehigh University | Sathya Ram</title>
        <meta name="description" content="About Lehigh University" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight lehigh page website" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <div class="website-image">
            <img src="/assets/lehighuniversity.png" alt="Lehigh University"></img>
          </div>
          <h1 className="website-name">Lehigh University</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div class="col-2 split-70-30">
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
                  <label>Year of Creation</label>
                  <div>2021</div>
                </div>
                <div className="website-url website-info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    href="https://sontagfoundation.org"
                  >
                    sontagfoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="full-width">
            <img
              alt=""
              loading="lazy"
              src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e2575610a8cfabbdf3afa_%402xD_Homepage_Dark%201%20(3).png"
              sizes="100vw"
              class="full-img"
            ></img>
          </div>
          <div class="col-3">
            <img
              alt=""
              loading="lazy"
              src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e256c9af8ab9bb2f04efb_M_Homepage_Guest_Dark%201%20(3).png"
              class="dark-mode-img"
            ></img>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e256cf611c2c0775d21b1_M_Homepage_Guest_Dark%202%20(3).png"
              class="dark-mode-img"
            ></img>
            <img
              alt=""
              loading="lazy"
              src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e256ce4b9de008c47a72d_M_Find%20a%20Doctor_Search%20Overlay_My%20Providers_Dark%201%20(1).png"
              class="dark-mode-img"
            ></img>
          </div>
          <div class="col-2">
            <div>
              <img
                alt=""
                loading="lazy"
                src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e256c9af8ab9bb2f04efb_M_Homepage_Guest_Dark%201%20(3).png"
                class="dark-mode-img"
              ></img>
            </div>
            <div>
              <img
                alt=""
                loading="lazy"
                src="https://cdn.prod.website-files.com/5d38a319524154842d081806/655e256cf611c2c0775d21b1_M_Homepage_Guest_Dark%202%20(3).png"
                class="dark-mode-img"
              ></img>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default lehigh;
