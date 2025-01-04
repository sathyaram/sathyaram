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

const Photography = () => {
  return (
    <section id="photography" title="photography">
      <div className="heading">
        <h3>Photography</h3>
        <div className="heading-desc">
          {`I'm an award winning photographer accomplished in a variety of
          disciplines with a focus on people, specifically creative portraiture.`}
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
            <img alt="Kacey" src="/photography/kacey.jpg" />
            <div className="photo-text">
              <div className="photo-caption">Kacey, in Georgetown</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/p/CQrRenyBPvH/?img_index=1"
              >
                Instagram Post ↗
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="Jack" src="/photography/jack-one.jpg" />
            <div className="photo-text">
              <div className="photo-caption">Jack, in the Forest</div>
              <a
                target="_blank"
                href="https://www.instagram.com/p/CFFxPX3hefW/?img_index=1"
                rel="noopener noreferrer"
              >
                Instagram Post ↗
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="Jordan" src="/photography/jordan-one.jpg" />
            <div className="photo-text">
              <div className="photo-caption">Jordan, at the Wharf</div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/p/CM5VE9WhF3S/?img_index=1"
              >
                Instagram Post ↗
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="Rania" src="/photography/rania-one.jpg" />
            <div className="photo-text">
              <div className="photo-caption">Rania, in the Studio</div>
              <a
                target="_blank"
                href="https://www.instagram.com/p/CTiCXeQnF9z/?img_index=1"
                rel="noopener noreferrer"
              >
                Instagram Post ↗
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Photography;
