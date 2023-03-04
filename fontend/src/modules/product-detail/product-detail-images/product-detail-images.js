import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Thumbs } from 'swiper';
import './product-detail-images.scss';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductDetailImage({ images }) {
  const [activeThumb, setActiveThumb] = useState();

  return (
    <>
      {images && images.length && (
        <div className="product-detail-images-swiper">
          <Swiper
            loop={true}
            spaceBetween={10}
            effect={'flip'}
            navigation={true}
            modules={[EffectFlip, Navigation, Thumbs]}
            className="images-swiper"
            thumbs={{ swiper: activeThumb }}
          >
            {images.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={item?.content} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            loop={true}
            onSwiper={setActiveThumb}
            spaceBetween={10}
            slidesPerView={4}
            className="thumb-swiper"
            modules={[Thumbs]}
          >
            {images.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="thumb-swiper-thumbnail">
                    <img src={item?.content} alt="" />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default ProductDetailImage;
