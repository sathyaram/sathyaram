import React from "react";
import Head from "next/head";
import Image from "next/image";
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
      <main role="main">
        <div className="design-heading">
          <h1 className="design-name">PokéLogos</h1>
        </div>
        <div className="design-content">
          <div className="constrained">
            <div className="grid-2">
              <Image width={800} height={600} priority alt="pokelogo-one" src="/designs/assets/pokelogo-one.webp" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-two" src="/designs/pokelogos/pokelogo-two.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-three" src="/designs/pokelogos/pokelogo-three.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-four" src="/designs/pokelogos/pokelogo-four.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-five" src="/designs/pokelogos/pokelogo-five.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-six" src="/designs/pokelogos/pokelogo-six.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-seven" src="/designs/pokelogos/pokelogo-seven.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-eight" src="/designs/pokelogos/pokelogo-eight.jpg" />
              <Image width={800} height={600} loading="lazy" alt="pokelogo-nine" src="/designs/pokelogos/pokelogo-nine.jpg" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default pokelogos;
