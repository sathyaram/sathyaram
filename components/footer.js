import React from "react";

const footer = () => {
  return (
    <footer role="contentinfo">
      <address>
        <div class="credits">
          <div>Made with Next.js.</div>
          <div>All photos by Sathya Ram.</div>
        </div>
        <p class="copyright">
          {" "}
          © {new Date().getFullYear()} Sathya Ram. All rights reserved.
        </p>
      </address>
      <div className="villain">Keep your friends close.</div>
    </footer>
  );
};

export default footer;
