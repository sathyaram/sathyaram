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
          breakpoints={{
            320: {
              slidesPerView: 1.25,
            },
            560: {
              slidesPerView: 2,
            },
            1080: {
              slidesPerView: 3,
            },
            1920: {
              slidesPerView: 4,
            }
          }}
          spaceBetween={30}
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
            <img src="/designs/lehighracing.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/designs/mosiaclogoconcepts.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/designs/indifylogoconcept.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/designs/powerhouselogoconcepts.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/designs/treetecklogoconcepts.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/designs/loewyinstitute.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Designs;
