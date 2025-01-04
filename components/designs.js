import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import Link from "next/link";

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
            <Link href="/portal">
              <div>
                <h3>Lehigh University&apos;s Campus Portal Designs</h3>
                <img
                  src="/websites/lehigh-two.jpg"
                  alt="lehigh-portal-tile-image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/fudtruk">
              <div>
                <h3>Fudtruk Branding + Designs</h3>
                <img src="/websites/fudtruk.webp" alt="fudtruk-tile-image" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/lehigh2018">
              <div>
                <h3>Lehigh2018 Web Theme Style Guide</h3>
                <img
                  src="/websites/lehigh2018-one.jpg"
                  alt="lehigh2018-guide-tile-image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/logos">
              <div>
                <h3>Logos + Concepts</h3>
                <img src="/designs/lehighracing.jpg" alt="logos-tile-image" />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/engineering">
              <div>
                <h3>Lehigh University&apos;s College of Engineering Web Designs</h3>
                <img
                  src="/websites/lehighengineering.jpg"
                  alt="engineering-tile-image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/pokelogos">
              <div>
                <h3>PokéLogos</h3>
                <img
                  src="/websites/pokelogo-one.webp"
                  alt="pokelogos-tile-image"
                />
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Designs;
