import Head from "next/head";
import Image from "next/image";
import Main from "../components/main.js";
import Menu from "../components/menu.js";
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
      </Head>
      <Menu />
      <header role="header">
        <div className="circle"></div>
        <div className="circle2"></div>
        <div className="pronounce">Sa-thee-uh · Ram</div>
        <h1>SathyaRam</h1>
        <h2>Web Developer · Digital Designer · Photographer</h2>
      </header>
      <Main />
      <Footer />
    </>
  );
}
