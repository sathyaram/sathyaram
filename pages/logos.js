import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const logos = () => {
  return (
    <>
      <Head>
        <title>Logos + Concepts | Sathya Ram</title>
        <meta name="description" content="Logos made by Sathya Ram" />
        <meta name="next-head-count" />
        <body className="midnight logos page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">Logos + Concepts</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
            <div className="grid-2">
              <img alt="logo-concept" src="/designs/lehighracing.jpg" />
              <img alt="logo-concept" src="/designs/mosiaclogoconcepts.jpg" />
              <img alt="logo-concept" src="/designs/indifylogoconcept.jpg" />
              <img alt="logo-concept" src="/designs/powerhouselogoconcepts.jpg" />
              <img alt="logo-concept" src="/designs/treetecklogoconcepts.jpg" />
              <img alt="logo-concept" src="/designs/loewyinstitute.jpg" />
              <img alt="logo-concept" src="/websites/vertralogos.jpg" />
              <img alt="logo-concept" src="/websites/frostlogoconcepts.jpg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default logos;
