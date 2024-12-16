import Head from "next/head";
import Image from "next/image";
import Menu from "../components/menu.js";
import Hero from "../components/hero.js";
import Projects from "../components/projects.js";
import Designs from "../components/designs.js";
import Photography from "../components/photography.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sathya Ram</title>
        <meta
          name="description"
          content="Developer | Designer | Photographer"
        />
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight" />
      </Head>
      <Menu />
        <Hero />
      <main role="main">
        <Projects />
        <Designs />
        <Photography />
      </main>
      <Footer />
    </>
  );
}
