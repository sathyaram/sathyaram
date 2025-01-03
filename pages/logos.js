import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const logos = () => {
  return (
    <>
      <Head>
        <title>Logos | Sathya Ram</title>
        <meta name="description" content="Logos made by Sathya Ram" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight logos page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">Logos</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
          <div className="grid-2">
            <img src="/designs/lehighracing.jpg" />
            <img src="/designs/mosiaclogoconcepts.jpg" />
            <img src="/designs/indifylogoconcept.jpg" />
            <img src="/designs/powerhouselogoconcepts.jpg" />
            <img src="/designs/treetecklogoconcepts.jpg" />
            <img src="/designs/loewyinstitute.jpg" />
          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default logos;



