import { gsap } from "gsap";
import { Data } from "../data.js";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

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
          slidesPerView={1.25}
          navigation={true}
          keyboard={true}
          effect="coverflow"
          centeredSlides={true} 
          spaceBetween={40}
          loop={true}
          breakpoints={{
            // When window width is >= 640px
            980: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
          }}
          initialSlide={1}
          autoplay={{
            delay: 6500, // Delay between transitions (in milliseconds)
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard, Autoplay]}
        >
          {Data.map(function (project, i) {
            if (project.type === "web") {
              return (
                <SwiperSlide>
                  <a href="/sontag" class="project-block">
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
                </article>
                </a>
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
