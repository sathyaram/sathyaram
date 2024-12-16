import { gsap } from "gsap";
import { Data } from "../data.js";
import { useState, useEffect, useRef } from "react";

const Designs = () => {
  

  return (
   
      <section id="designs" title="designs">
        <div className="heading">
          <h3>Designs</h3>
        </div>
        <div className="content">
          {Data.map(function (project, i) {
            if (project.type === "design") {
              
            }
          })}
        </div>
      </section>
  );
};

export default Designs;
