import React from "react";

const footer = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  return (
    <footer role="contentinfo">
      <nav
        className="contact-menu menu"
        role="navigation"
        name="contact-menu"
        aria-label="contact-menu"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="SathyaRam_Resume2021.pdf"
        >
          Resume
        </a>
        <a
          className="music"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=MXkZ-eeGs6A"
        >
          ✧
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sathya-ram/"
        >
          LinkedIn
        </a>
        <a
          className="music"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/watch?v=ktlJC213PPs"
        >
          ✧
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:sathyatheram@gmail.com"
        >
          Email
        </a>
      </nav>
      <address>
        <div className="credits">
          <div>Handcrafted with Next.js</div>
          <div></div>
        </div>
        <p className="copyright">
          {" "}
          © {new Date().getFullYear()} Sathya Ram. All rights reserved.
        </p>
      </address>
      <div className="villain">
        {/* Have a fantastic{day}! */}
        Keep your friends close.
      </div>
    </footer>
  );
};

export default footer;
