import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const lehigh2018 = () => {
  return (
    <>
      <Head>
        <title>Lehigh2018 Web Theme Style Guide | Sathya Ram</title>
        <meta
          name="description"
          content="About Lehigh2018 Web Theme Style Guide"
        />
        <meta name="next-head-count" />
        <body className="midnight portal page design" />
      </Head>
      <Menu />
      <main role="main">
        <div className="design-heading">
          <h1 className="design-name">Lehigh2018 Web Theme Style Guide</h1>
        </div>
        <div className="design-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    While at Lehigh University, I was tasked to create the new
                    Lehigh2018 website theme that would be used across over a
                    100 department websites, I decided it would be a great
                    opportunity to help out users and create modular displays
                    for content creators.
                  </p>
                  <br></br>
                  <p>
                    These &apos;content sections&apos; are pre-styled components
                    like an Image Slider, Call to Action buttons, Card/Photo
                    grids, Blockquotes, etcs that users can easily add to their
                    web pages with a click of a button in Drupal. It was wildly
                    successful and is widely used!
                  </p>
                  <br></br>
                  <p>
                    It was an absolute pleasure creating these - I also created
                    a PDF so content creators could browse how the Content
                    Sections look as well as their functionality and use cases.
                    Definitely take a look!
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="role info">
                  <label>Role</label>
                  <div>Senior Web Developer (Portal)</div>
                </div>
                <div className="stack info">
                  <label>Stack</label>
                  <ul>
                    <li>Adobe Illustrator 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Designer</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Designed In</label>
                  <div>2018</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="lehigh2018-one"
              priority
              src="/designs/assets/lehigh2018-one.jpg"
            ></Image>
          </div>
          <div className="col-2">
            <div className="col">
              <Image
                width={1200}
                height={2000}
                alt="lehigh2018-two"
                loading="lazy"
                src="/designs/lehigh2018/lehigh2018-two.jpg"
              ></Image>
            </div>
            <div className="col">
              <Image
                width={1200}
                height={2000}
                alt="lehigh2018-three"
                loading="lazy"
                src="/designs/lehigh2018/lehigh2018-three.jpg"
              ></Image>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="lehigh2018-four"
              loading="lazy"
              src="/designs/lehigh2018/lehigh2018-four.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="lehigh2018-five"
              loading="lazy"
              src="/designs/lehigh2018/lehigh2018-five.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="lehigh2018-six"
              loading="lazy"
              src="/designs/lehigh2018/lehigh2018-six.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="lehigh2018-seven"
              loading="lazy"
              src="/designs/lehigh2018/lehigh2018-seven.png"
            ></Image>
          </div>
        </div>
        <div className="full-width">
          <Image
            width={1200}
            height={2000}
            alt="lehigh2018-eight"
            loading="lazy"
            src="/designs/lehigh2018/lehigh2018-eight.png"
          ></Image>
        </div>
        <div className="full-width">
          <Image
            width={1200}
            height={2000}
            alt="lehigh2018-nine"
            loading="lazy"
            src="/designs/lehigh2018/lehigh2018-nine.png"
          ></Image>
        </div>
        <div className="full-width">
          <Image
            width={1200}
            height={2000}
            alt="lehigh2018-ten"
            loading="lazy"
            src="/designs/lehigh2018/lehigh2018-ten.png"
          ></Image>
        </div>
        <div className="full-width">
          <Image
            width={1200}
            height={2000}
            alt="lehigh2018-eleven"
            loading="lazy"
            src="/designs/lehigh2018/lehigh2018-eleven.png"
          ></Image>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default lehigh2018;
