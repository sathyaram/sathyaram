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

const Designs = () => {
  

  return (
   
      <section id="designs" title="designs">
        <div className="heading">
          <h3>Designs</h3>
          <div class="heading-desc">
          I craft and activate brands with cultural insight, user-driven data, strategic vision and attentive attention to aesthetics.
          </div>
        </div>
        <div className="content">
        <Swiper
          style={{
            margin: "auto",
            overflow: "visible",
          }}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={true}
          keyboard={true}
          modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        >
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4388579/media/45fee7250929e10ada6bb6a924b2f3d1.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4388563/media/c4a13c14635ceb14f10ea77303835e03.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4386024/media/e2af2a14b6559c81df10023fc30d6a0e.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4388509/media/5468db069f0f84d8cdca6bbd73d2069e.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4386077/media/2e547509b61be30885ad9603f7ca428c.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.dribbble.com/users/993664/screenshots/4379587/indify.jpg?resize=800x600&vertical=center" />
          </SwiperSlide>
        </Swiper>
          {/* {Data.map(function (project, i) {
            if (project.type === "design") {
              
            }
          })} */}
        </div>
      </section>
  );
};

export default Designs;
