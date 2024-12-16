import { gsap } from "gsap";
import { Data } from "../data.js";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";

const projects = () => {

  return (
      <section id="websites" title="websites">
        <div className="heading">
          <h3>Websites</h3>
          <div class="heading-desc">
          I build and develop full-scale websites and engaging UI with a variety of technologies like Drupal, WordPress, React and Grav.
          </div>
        </div>
        <div className="content">
        <Swiper
          style={{
            margin: "auto",
            overflow: "visible",
          }}
          slidesPerView={2}
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={true}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        >
          {Data.map(function (project, i) {
            if (project.type === "web") {
              return (
                <SwiperSlide>
                <article
                  className="project"
                  id={project.id}
                  name={project.id}
                  key={i}
                >
                  <div className="project-background"></div>
                  <div className="project-heading">
                    <div className="project-image">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-subtitle">{project.subtitle}</div>
                    <button className="project-expand">
                      Click to Expand <span>+</span>
                    </button>
                  </div>
                  {/* <div className="project-content">
                    <div className="wrapper">
                      <ul className="project-tags">
                        {project.tags.map(function (tag, i) {
                          return <li key={i}>{tag}</li>;
                        })}
                      </ul>
                      <div className="project-agency">
                        {project.agency}, <span>{project.year}</span>
                      </div>
                    </div>
                    <div className="project-description">
                      <div className="project-text">{project.description}</div>
                      <div className="project-slides">
                        <div className="project-slide">
                          <img src="" alt="" />
                        </div>
                        <div className="project-slide">
                          <img src="" alt="" />
                        </div>
                        <div className="project-slide">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div className="project-text">{project.description}</div>
                    </div>
                    <a
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                    >
                      {project.url}
                    </a>
                  </div> */}
                </article>
                </SwiperSlide>
              );
            }
          })}
          </Swiper>
        </div>
      </section>
  );
};

export default projects;
