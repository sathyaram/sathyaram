import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import { Data } from "../data.js";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
          navigation={true}
          keyboard={true}
          centeredSlides={true}
          initialSlide={1}
          spaceBetween={90}
          breakpoints={{
            320: {
              slidesPerView: 1.25,
            },
            720: {
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
            delay: 8500,
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Navigation, Keyboard, Autoplay]}
        >
          {Data.map(function (design, i) {
            if (design.type === "design") {
              return (
                <SwiperSlide key={i}>
                  <a className="design" href={`/` + design.id}>
                    <h3>{design.title}</h3>
                    <Image
                      width={800}
                      height={600}
                      loading="lazy"
                      alt={design.title}
                      src={design.image}
                    ></Image>
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

export default Designs;