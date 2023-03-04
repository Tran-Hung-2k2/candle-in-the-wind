import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import './hero-swiper.scss';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
function Hero({ slides, images }) {
  return (
    <section id="hero">
      <div className="row sm-gutter">
        <div className="col l-7 m-7 c-12" style={{ paddingTop: '2px', paddingBottom: '2px' }}>
          <Swiper
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
          >
            {slides.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={item} alt="hero-slide" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="col l-5 m-5 c-12">
          <div className="row">
            <div className="col l-12 m-12 c-6">
              <div className="hero-image">
                <img src={images[1]} alt="hero-img" />
              </div>
            </div>
            <div className="col l-12 m-12 c-6">
              <div className="hero-image">
                <img src={images[0]} alt="hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
