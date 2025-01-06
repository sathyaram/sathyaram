import React from "react";
import Head from "next/head";
import Image from "next/image";
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
              <Image width={800} height={600} priority alt="logo-concept" src="/designs/assets/lehighracing.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/mosiaclogoconcepts.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/indifylogoconcept.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/powerhouselogoconcepts.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/treetecklogoconcepts.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/loewyinstitute.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/vertralogos.jpg" />
              <Image width={800} height={600} loading="lazy" alt="logo-concept" src="/designs/logos/frostlogoconcepts.jpg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default logos;
