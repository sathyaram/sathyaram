import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Hero from "../components/hero.js";
import Projects from "../components/projects.js";
import Ui from "../components/ui.js";
import Designs from "../components/designs.js";
import Photography from "../components/photography.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sathya Ram</title>
        <meta name="next-head-count" content="4"/>
        <meta
          name="description"
          content="Web Developer | Digital Designer | Photographer"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <body className="midnight homepage" />
      </Head>
      <Menu />
      <Hero />
      <main role="main">
        <Projects />
        {/* <Ui /> */}
        <Designs />
        <Photography />
      </main>
      <Footer />
    </>
  );
}
