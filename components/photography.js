import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from "../data.js";
import Image from "next/image";
import { EffectCoverflow, Keyboard, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

const Photography = () => {
  return (
    <section id="photography" title="photography">
      <div className="heading">
        <h3 className="heading-title">Photography</h3>
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
            delay: 7500,
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Navigation, Keyboard, Autoplay]}
          effect="coverflow"
        >
          {Data.map(function (photograph, i) {
            if (photograph.type === "photography") {
              return (
                <SwiperSlide key={i}>
                  <div className="photograph">
                    <Image
                      width={600}
                      height={900}
                      priority
                      src={photograph.image}
                      alt={photograph.title}
                    ></Image>
                    <div className="photograph-text">
                      <div className="photograph-title">{photograph.title}</div>
                      <div className="photograph-subtitle">
                        {photograph.subtitle}
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={photograph.url}
                      >
                        {photograph.link}
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Photography;
