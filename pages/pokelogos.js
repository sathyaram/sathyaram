import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const pokelogos = () => {
  return (
    <>
      <Head>
        <title>PokéLogos | Sathya Ram</title>
        <meta name="description" content="Logos made by Sathya Ram" />
        <meta name="next-head-count" />
        <body className="midnight pokelogos page design" />
      </Head>
      <Menu />
      <main>
        <div className="website-heading">
          <h1 className="website-name">PokéLogos</h1>
          <h2 className="website-tagline"></h2>
        </div>
        <div className="website-content">
          <div className="constrained">
          <div className="grid-2">
            <img src="/websites/pokelogo-one.webp" />
            <img src="/websites/pokelogo-two.jpg" />

            <img src="/websites/pokelogo-three.jpg" />

            <img src="/websites/pokelogo-four.jpg" />

            <img src="/websites/pokelogo-five.jpg" />

            <img src="/websites/pokelogo-six.jpg" />

            <img src="/websites/pokelogo-seven.jpg" />

            <img src="/websites/pokelogo-eight.jpg" />

            <img src="/websites/pokelogo-nine.jpg" />

          </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default pokelogos;



