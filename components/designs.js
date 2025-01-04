import { gsap } from "gsap";
import { Data } from "../data.js";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

const Designs = () => {
  return (
    <section id="designs" title="designs">
      <div className="heading">
        <h3>Designs</h3>
        <div className="heading-desc">
          I craft and activate brands with cultural insight, user-driven data,
          strategic vision and attentive attention to aesthetics.
        </div>
      </div>
      <div className="content">
        <Swiper
          style={{
            margin: "auto",
            overflow: "visible",
          }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={true}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={90}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
            },
            560: {
              slidesPerView: 2,
            },
            1480: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            },
          }}
          loop={true}
          autoplay={{
            delay: 8500, // Delay between transitions (in milliseconds)
            disableOnInteraction: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Keyboard,
            Autoplay,
          ]}
        >
          <SwiperSlide>
            <a href="/portal">
              <h3>Lehigh University's Campus Portal Designs</h3>
              <img src="/websites/lehigh-two.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/fudtruk">
              <h3>Fudtruk Branding + Designs</h3>
              <img src="/websites/fudtruk.webp" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/lehigh2018">
              <h3>Lehigh2018 Web Theme Style Guide</h3>
              <img src="/websites/lehigh2018-one.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/logos">
              <h3>Logos + Concepts</h3>
              <img src="/designs/lehighracing.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/engineering">
              <h3>Lehigh University's College of Engineering Web Designs</h3>
              <img src="/websites/lehighengineering.jpg" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="/pokelogos">
              <h3>PokéLogos</h3>
              <img src="/websites/pokelogo-one.webp" />
            </a>
          </SwiperSlide>
          {/* <SwiperSlide>
            <a href="/webdesigns">
              <h3>Web Design Concepts</h3>
              <img src="/websites/paulknakk.jpg" />
            </a>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Designs;
