import Head from "next/head";
import Loader from "../components/loader.js";
import Menu from "../components/menu.js";
import Hero from "../components/hero.js";
import Rain from "../components/rain.js";
import Websites from "../components/websites.js";
import Designs from "../components/designs.js";
import Photography from "../components/photography.js";
import Testimonials from "../components/testimonials.js";
import Footer from "../components/footer.js";
import sitemap from "./sitemap.js";

export default function Home() {

  sitemap();
  
  return (
    <>
      <Head>
        <title>
          Home | Sathya Ram ⸺ Web Developer, UI/Graphic Designer, Photographer
        </title>
        <meta property="og:title" content="It's Sathya Ram Website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:image:alt" content="Sathya Ram Website Image" />
        <meta
          property="og:description"
          content="Web Developer | UI/Graphic Designer | Photographer"
        />
        <meta
          name="description"
          content="Web Developer | UI/Graphic Designer | Photographer"
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
        <Websites />
        <Designs />
        <Photography />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
