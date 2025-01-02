import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const sontag = () => {
  return (
    <>
      <Head>
        <title>The Sontag Foundation | Sathya Ram</title>
        <meta name="description" content="About Sontag Foundation" />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight sontag page" />
      </Head>
      <Menu />
      <main>
        <h1>The Sontag Foundation</h1>
        <h2>The Tagline of Taglines</h2>
        <h3>Web Development, Custom Theming, CSS/SCSS</h3>
        <h4>Stack: Drupal 7, HTML, SCSS, JavaScript</h4>
        <div class="year">2021</div>
        <p>I designed the Kendra Scott website and the product customization user flow and experience. The team was looking for a design that felt exciting yet friendly. I created prototypes and designs for the customization tool.</p>
        <a href="https://sontagfoundation.org">The Sontag Foundation</a>
      </main>
      <Footer />
    </>
  );
};

export default sontag;
