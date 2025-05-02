import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const sontag = () => {
  return (
    <>
      <Head>
        <title>The Sontag Foundation | Sathya Ram</title>
        <meta name="description" content="About Sontag Foundation" />
        <meta name="next-head-count" />
        <body className="midnight sontag page website" />
      </Head>
      <Menu />
      <main role="main">
        <div className="website-heading">
          <div className="website-image">
            <Image
              width={1200}
              height={2000}
              priority
              src="/websites/assets/sontag.png"
              alt="The Sontag Foundation"
            />
          </div>
          <h1 className="website-name">The Sontag Foundation</h1>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                  One of my projects was to craft the entire website for the Sontag Foundation. The story of Sontag Foundation is a heartwarming experience of Rick and Susan Sontag and their ability to turn adversity into a benefit for many others who suffer from brain cancer.  
                  </p>
                  <br></br>
                  <p>
                  On the social side this was satisfying because of what it represents to the patients.  On the technical side, I was quite pleased because I was entrusted with crafting the entire website from scratch in WordPress, while also theming it.  I think the deep meaning of what the Foundation stands for is effectively depicted in the design. 
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
                    <li>HTML / CSS, Bootstrap</li>
                    <li>SCSS Theming</li>
                    <li>Advanced Custom Fields</li>
                  </ul>
                </div>
                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Theme Creation</li>
                    <li>Extensive Custom Fields</li>
                    <li>Online Style Guide</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Agency</label>
                  <div>Push10</div>
                </div>
                <div className="year info">
                  <label>Launched</label>
                  <div>2020</div>
                </div>
                <div className="url info">
                  <label>Live Website</label>
                  <a
                    className="website-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://sontagfoundation.org"
                  >
                    sontagfoundation.org
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="sontag-one"
              loading="lazy"
              src="/websites/sontag/sontag-one.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="sontag-two"
              loading="lazy"
              src="/websites/sontag/sontag-two.png"
            ></Image>
          </div>
          <div className="col-2">
            <div>
              <Image
                width={1000}
                height={4000}
                alt="sontag-four"
                loading="lazy"
                src="/websites/sontag/sontag-four.png"
              ></Image>
            </div>
            <div>
              <Image
                width={1000}
                height={4000}
                alt="sontag-five"
                loading="lazy"
                src="/websites/sontag/sontag-five.png"
              ></Image>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="sontag-three"
              loading="lazy"
              src="/websites/sontag/sontag-three.png"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default sontag;
