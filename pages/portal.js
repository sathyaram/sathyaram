import React from "react";
import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const portal = () => {
  return (
    <>
      <Head>
        <title>
          Lehigh University&apos;s Campus Portal Designs | Sathya Ram
        </title>
        <meta
          name="description"
          content="About Lehigh University's Campus Portal Designs"
        />
        <meta name="next-head-count" />
        <body className="midnight portal page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">
            Lehigh University&apos;s Campus Portal Designs
          </h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="col-2 split-70-30">
              <div className="col">
                <div className="website-description">
                  <p>
                    While working at Lehigh University, it was my job to
                    maintain but also elevate the Campus Portal, built on
                    Ellucian&apos;s Luminus 7 Platform. It was the central hub
                    on campus where students, faculty, staff, parents,
                    perspectives and just about everyone went to get knowledge
                    about the college, the opportunities, the news, the daily
                    events and tons of other information. Having come fresh into
                    the role with a graphic design degree, I was determined to
                    inject a new modern take onto the old software. I leveraged
                    custom JavaScript on their Java based platform to deliver my
                    custom Masonry layout design that I had created as a new
                    take on our portal.
                  </p>
                  <br></br>
                  <p>
                    I focused on a very user centric design, giving stakeholders
                    what they wanted by making almost all the helpful links
                    available as soon as the page loads and having two equally
                    weighted sidebars to maximize visibility. Within the content
                    area, you can scroll and get a variety of information, like
                    social media updates, video streams of cameras on campus,
                    and featured events.
                  </p>
                  <p>
                    It was a very defining moment for me, launching this. Hope
                    you like it! I wish you could see the site, but it&apos;s
                    behind my university&apos;s SSO.
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
                    <li>Adobe Illustrator 7</li>
                    <li>HTML / CSS / SCSS</li>
                    <li>JavaScript</li>
                    <li>Masonry</li>
                  </ul>
                </div>
                <div className="website-scope website-info">
                  <label>Scope</label>
                  <ul>
                    <li>Portal Management</li>
                    <li>Designer</li>
                    <li>Developer</li>
                  </ul>
                </div>
                <div className="website-year website-info">
                  <label>Launched</label>
                  <div>2017</div>
                </div>
              </div>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="portal-og"
              loading="lazy"
              src="/designs/portal/portal.jpg"
            ></Image>
          </div>
          <div className="col-2">
            <div className="col">
              <Image
                width={1000}
                height={4000}
                alt="portal-three"
                loading="lazy"
                src="/designs/portal/portal-three.jpg"
              ></Image>
            </div>
            <div className="col">
              <Image
                width={1000}
                height={4000}
                alt="portal-five"
                loading="lazy"
                src="/designs/portal/portal-five.jpg"
              ></Image>
            </div>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="portal-two"
              loading="lazy"
              src="/designs/portal/portal-two.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="portal-four"
              loading="lazy"
              src="/designs/portal/portal-four.jpg"
            ></Image>
          </div>

          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="portal-six"
              loading="lazy"
              src="/designs/portal/portal-six.jpg"
            ></Image>
          </div>
          <div className="full-width">
            <Image
              width={1000}
              height={4000}
              alt="portal-seven"
              loading="lazy"
              src="/designs/portal/portal-seven.jpg"
            ></Image>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default portal;
