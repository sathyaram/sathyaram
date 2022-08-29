import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
import { Data } from "../data.js";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/keyboard";

const Photography = () => {
  return (
    <section id="photography" title="photography">
      <div className="heading">
        <h3>Photography</h3>
        <div class="tabs">
          <div className="active">Portraits</div>
          <div>Cosplay</div>
          <div>Nature</div>
          <div>Lifestyle</div>
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
          effect="coverflow"
        >
          <SwiperSlide></SwiperSlide>
          <SwiperSlide>
            <img src="https://sathyaram.com/static/400f38472f745011e3eb648663c07086/47498/rania-one.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://sathyaram.com/static/e71cb7c6f77c1b8a15725460c255ff0f/47498/jordan-one.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://sathyaram.com/static/ef19c539ce257e99fdb9d5dc13ce7aca/9dc27/por-one.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://sathyaram.com/static/6282ea85af8447cac6e9860ae405e3c1/4fe8c/rachel-one.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://sathyaram.com/static/ee27bb77c952248161779381b16a20fd/4fe8c/jack-one.jpg" />
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>

        {/* {Data.map(function (project, i) {
          if (project.type === "photography") {
            return (
              <div className="photograph" key={i}>
                {project.title}
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
                  effect="coverflow"
                >
                  {project.photos.map(function (photograph, ind) {
                    return (
                      <SwiperSlide className="image" key={ind}>
                        <img
                          src={photograph.picture}
                          alt={photograph.caption}
                        />
                        <div className="caption">{photograph.caption}</div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            );
          }
        })} */}
      </div>
    </section>
  );
};

export default Photography;
