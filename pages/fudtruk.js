import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const fudtruk = () => {
  return (
    <>
      <Head>
        <title>Fudtruk Branding and Designs | Sathya Ram</title>
        <meta name="description" content="About Fudtruk Branding and Designs" />
        <meta name="next-head-count" />
        <body className="midnight fudtruk page design" />
      </Head>
      <Menu />
      <main role="main">
        <div className="design-heading">
          <h1 className="design-name">Fudtruk Branding and Designs</h1>
        </div>
        <div className="design-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="description">
                  <p>
                    I got to do the vinyl wrap for a food truck! After doing the
                    logo and branding for the FudTruk, a food truck in the
                    Lehigh Valley, I was able to achieve the opportunity to do
                    the design for their actual truck! I was beyond excited!
                  </p>
                  <br></br>
                  <p>
                    I worked with a local print shop, Christmas City Printing in
                    Bethlehem on getting the design files in perfect shape for
                    the vinyl cuts to be just right.
                  </p>
                  <br></br>
                  <p>
                    The folks behind the FudTruk wanted a more minimalist look
                    so I suggested colorful icons which I thought would look
                    good against the white truck. I wanted to throw a splash of
                    orange near the bottom to bring out the orange from the logo
                    and branding; I also wanted the logo to contrast
                    dramatically, front and center, when you ordered.
                  </p>
                  <br></br>
                  <p>
                    I also built their website, where you&apos;ll see so much
                    more about the FudTruk including the menu, food pictures
                    which I took, some background video I made, some neat web
                    design and pretty colors!
                  </p>
                  <br></br>
                </div>
              </div>
              <div className="col">
                <div className="role info">
                  <label>Role</label>
                  <div>Designer</div>
                </div>
                <div className="stack info">
                  <label>Stack</label>
                  <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe InDesign</li>
                  </ul>
                </div>
                <div className="scope info">
                  <label>Scope</label>
                  <ul>
                    <li>Branding</li>
                    <li>Vinyl Wrap</li>
                    <li>Files, Assets, Exports</li>
                  </ul>
                </div>
                <div className="year info">
                  <label>Created</label>
                  <div>2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-one"
              loading="lazy"
              src="/designs/fudtruk/fudtruk.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-two"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-two.jpg"
            ></Image>
          </div>
          <div className="full-width full-small">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-three"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-three.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-four"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-four.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-five"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-five.jpg"
            ></Image>
          </div>
          <div className="full-width full-small">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-six"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-six.png"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1200}
              height={2000}
              alt="fudtruk-seven"
              loading="lazy"
              src="/designs/fudtruk/fudtruk-seven.jpg"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default fudtruk;