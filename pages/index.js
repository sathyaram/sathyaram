import Head from "next/head";
import Loader from "../components/loader.js";
import Menu from "../components/menu.js";
import Hero from "../components/hero.js";
import Rain from "../components/rain.js";
import Projects from "../components/projects.js";
import Designs from "../components/designs.js";
import Photography from "../components/photography.js";
import Testimonials from "../components/testimonials.js";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sathya Ram</title>
        <meta name="next-head-count" />
        <meta
          name="description"
          content="Web Developer | Digital Designer | Photographer"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <body className="midnight homepage" />
      </Head>
      <Loader />
      <Menu />
      <Hero />
      <Rain />
      <main role="main">
        <Projects />
        <Designs />
        <Photography />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
