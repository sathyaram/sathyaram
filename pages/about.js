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
      </Head>
      <Menu />
      <Footer />
    </>
  );
};

export default about;
