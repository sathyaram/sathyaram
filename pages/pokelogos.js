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
              <img loading="lazy" alt="pokelogo-one" src="/designs/assets/pokelogo-one.webp" />
              <img loading="lazy" alt="pokelogo-two" src="/designs/pokelogos/pokelogo-two.jpg" />
              <img loading="lazy" alt="pokelogo-three" src="/designs/pokelogos/pokelogo-three.jpg" />
              <img loading="lazy" alt="pokelogo-four" src="/designs/pokelogos/pokelogo-four.jpg" />
              <img loading="lazy" alt="pokelogo-five" src="/designs/pokelogos/pokelogo-five.jpg" />
              <img loading="lazy" alt="pokelogo-six" src="/designs/pokelogos/pokelogo-six.jpg" />
              <img loading="lazy" alt="pokelogo-seven" src="/designs/pokelogos/pokelogo-seven.jpg" />
              <img loading="lazy" alt="pokelogo-eight" src="/designs/pokelogos/pokelogo-eight.jpg" />
              <img loading="lazy" alt="pokelogo-nine" src="/designs/pokelogos/pokelogo-nine.jpg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default pokelogos;
