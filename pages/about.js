import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Sathya Ram</title>
        <meta name="description" content="About Sathya Ram" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight page about" />
      </Head>
      <Menu />
      <main role="main">
        <div class="constrained">
          <div class="about-heading">
            <h1>About</h1>
          </div>
        <div class="about-section">
          <h4>Synopsis</h4>
          <div class="about-text">
          <p> At heart, I am a creator: I believe in aesthetics with purpose.</p>
            <br></br>
          <p> At heart, I am a creator: I believe in aesthetics with purpose.</p>
          </div>
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
