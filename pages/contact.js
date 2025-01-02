import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Footer from "../components/footer.js";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact | Sathya Ram</title>
        <meta name="description" content="Contact Sathya Ram" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Footer />
    </>
  );
};

export default contact;
