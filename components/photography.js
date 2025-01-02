import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import { Data } from "../data.js";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

const Photography = () => {
  return (
    <section id="photography" title="photography">
      <div className="heading">
        <h3>Photography</h3>
        <div className="heading-desc">
          I'm an award winning photographer accomplished in a variety of
          disciplines with a focus on people, specifically creative portraiture.
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
          spaceBetween={10}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
            },
            530: {
              slidesPerView: 2,
            },
            980: {
              slidesPerView: 3,
            },
          }}
          initialSlide={1}
          autoplay={{
            delay: 7500, // Delay between transitions (in milliseconds)
            disableOnInteraction: true,
          }}
          modules={[
            EffectCoverflow,
            Pagination,
            Navigation,
            Keyboard,
            Autoplay,
          ]}
          effect="coverflow"
        >
          <SwiperSlide>
            <img src="/photography/kacey.jpg" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="/photography/jack-one.jpg" />

          </SwiperSlide>
          <SwiperSlide>
          <img src="/photography/jordan-one.jpg" />

          </SwiperSlide>
          <SwiperSlide>
          <img src="/photography/rania-one.jpg" />

          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Photography;
