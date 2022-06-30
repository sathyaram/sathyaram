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
        <div className="hero">
          <div className="pronounce">Sa-thee-uh · Ram</div>
          <h1>
            <span>S</span>
            <span>a</span>
            <span>t</span>
            <span>h</span>
            <span>y</span>
            <span>a</span>
            <span>R</span>
            <span>a</span>
            <span>m</span>
          </h1>
          <h2>Web Developer · Digital Designer · Photographer</h2>
        </div>
      </header>
      <Main />
      <Footer />
    </>
  );
}
