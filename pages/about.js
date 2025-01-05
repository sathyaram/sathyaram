import React from "react";
import Head from "next/head";
import Menu from "../components/menu.js";
import Rain from "../components/rain.js";
import Footer from "../components/footer.js";

const about = () => {
  return (
    <>
      <Head>
        <title>About | Sathya Ram</title>
        <meta name="description" content="About Sathya Ram" />
        <meta name="next-head-count" />
        <body className="midnight page about" />
      </Head>
      <Menu />
      <Rain />
      <main role="main">
        <div className="constrained">
          <div className="about-heading">
            <h1>About</h1>
          </div>
          <div className="about-section">
            <h4>Synopsis</h4>
            <div className="about-text">
              <p>Hi there! 👋🏽 I&apos;m Sathya Ram.</p>
              <br></br>
              <p>
                I design and develop modern websites; I build engaging layouts,
                and user interfaces; and I craft delightful web animations and
                interactions.
              </p>
              <br></br>
              <p>I am also an avid photographer and freelancer.</p>
              <br></br>
              <p>
                Combining these skills, I bring beautiful digital experiences to
                life.
              </p>
              <br></br>
              <p>
                At heart, I am a creator: I believe in aesthetics with purpose.
              </p>
            </div>
          </div>
          <div className="about-section">
            <h4>At a Glance</h4>
            <div className="about-text">
              <p>I build websites with WordPress, Drupal, React and Webflow.</p>
              <br></br>
              <p>
                I write HTML, (S)CSS, front-end JavaScript, jQuery, JSX, PHP,
                and Twig.
              </p>
              <br></br>
              <p>
                I design and prototype in Adobe XD, Figma, Sketch, Adobe
                Illustrator, and InVision.
              </p>
              <br></br>
              <p>I capture photos with my Sony A7R4.</p>
            </div>
          </div>
          <div className="about-section">
            <h4>Bio</h4>
            <div className="about-text">
              <p>
                I double majored in Design and Studio Art at Lehigh University,
                with a concentration in Design and Studio Art. In my last year
                of college, I taught myself how to code and push my designs to
                the world wide web.
              </p>

              <br></br>
              <p>
                After a couple years of agency experience, it became clear that
                web design and development was my passion. So, I decided to
                learn programming fundamentals in a formal setting, at a coding
                bootcamp called General Assembly, where I learned JavaScript and
                React.js in a rigorous environment.
              </p>
              <br></br>

              <p>
                Currently, I operate my own freelance website development,
                interface design and professional photography LLC. Right now,
                I&apos;m seeking a creative developer + designer role.
              </p>
            </div>
          </div>
          <div className="about-section">
            <h4>Awards + Publications</h4>
            <div className="about-text">
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www2.lehigh.edu/news/36th-honors-convocation-celebrates-academic-excellence"
                  >
                    Leonard B. Pool Prize
                  </a>
                  <span> Competitive Entreprenurial Scholarship</span>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.bananafactory.org/2015/11/11/2015-olympus-invision-college-photo-competition-winners-announced/"
                  >
                    Olympus InVision Photography Festival
                  </a>
                  <span>Second Place</span>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pabug.org/"
                  >
                    PA BUG Best Portal Design Award
                  </a>
                  <span>First Place</span>
                </li>
                <li>
                  Lehigh Acumen<span>Published Photography</span>
                </li>
                <li>
                  InStyle Magazine<span>Published Photography</span>
                </li>
                <li>
                  Hazl Magazine<span>Published Photography</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-section">
            <h4>Etc.</h4>
            <div className="about-text">
              <p>
                ENFP. Movie buff. Voice actor. CSS Wiz. Passionate nerd. Avid
                conversationalist.
              </p>
              <br></br>
              <p>I live on iMDB: I love all things film/TV.</p>
              <br></br>
              Check out
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last"
              >
                what I&apos;ve rated
              </a>
              .<br></br>
              <p>
                I <s>used to</s> play
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya"
                >
                  World of Warcraft
                </a>
                .
              </p>
              <br></br>
              <p>
                I post my photography on
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/sathya.ram"
                >
                  my Instagram
                </a>
                , so follow me if you want a little vibrance on your daily
                scrolls.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default about;
