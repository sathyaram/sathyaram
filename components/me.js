import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { Data } from "../data.js";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

const me = () => {
  return (
  <>
  <section id="about" title="about">
        <div className="heading">
          <h3 className="heading-title">About</h3>
 
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
            initialSlide={1}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1.25,
              },
              720: {
                slidesPerView: 2,
              },
              1480: {
                slidesPerView: 5,
              },
              1920: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 8500,
              disableOnInteraction: true,
            }}
            modules={[EffectCoverflow, Navigation, Keyboard, Autoplay]}
          >
            {Data.map(function (fact, i) {
              if (fact.type === "design") {
                return (
                  <SwiperSlide key={i}>
                    <div className="about-me">
                      <Image
                        width={800}
                        height={600}
                        loading="lazy"
                        alt={fact.alt}
                        src={fact.image}
                      ></Image>
                      <h4>{fact.title}</h4>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </section>
  </>);
};

export default me;