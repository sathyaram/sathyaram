import { Data } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Navigation, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/keyboard";
import "swiper/css/autoplay";

const websites = () => {
  return (
    <section id="websites">
      <div className="heading">
        <h3 className="heading-title">Websites</h3>
        <div className="heading-desc">
          I build and develop full-scale websites and engaging UI with a variety
          of technologies like WordPress, Drupal, Webflow and Next.js.
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
          effect="coverflow"
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            200: {
              slidesPerView: 1.25,
              spaceBetween: 20,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            1920: {
              slidesPerView: 3,
            },
          }}
          initialSlide={1}
          autoplay={{
            delay: 6500,
            disableOnInteraction: true,
          }}
          modules={[EffectCoverflow, Navigation, Keyboard, Autoplay]}
        >
          {Data.map(function (website, i) {
            if (website.type === "web") {
              return (
                <SwiperSlide title={website.title} key={i}>
                  <a
                    href={"/" + website.id}
                    rel="noopener noreferrer"
                    className="project-wrapper"
                  >
                    <article className="project" id={website.id}>
                      <div className="project-background"></div>
                      <div className="project-heading">
                        <div className="project-image">
                          <Image
                            priority
                            width={800}
                            height={600}
                            src={website.image}
                            alt={website.alt}
                          ></Image>
                        </div>
                        <div className="project-title">{website.title}</div>
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

export default websites;
