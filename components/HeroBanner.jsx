import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay } from 'swiper';
const heroBanner = ({ heroBanner }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={2}
      loop={true}
      speed={900}
      pagination={{
        clickable: true,
      }}
      // centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {heroBanner.map((element) => (
        <SwiperSlide key={element._id}>
          <div className="hero-banner-container">
            <div classsName="hero-banner-layout">
              <div className="Header__Slider-dataImage">
                <div className="banner-Text">
                  <p className="beats-solo">{element.smallText}</p>
                  <h3>{element.midText}</h3>
                  <h1>{element.largeText1}</h1>
                  <Link href={`/product/${element.product}`}>
                    <button type="button">{element.buttonText}</button>
                  </Link>
                </div>

                <div></div>
                <div className="Image_Container">
                  <img
                    src={urlFor(element.image)}
                    alt="Sports-Tshirts"
                    className="hero-banner-image"
                  />
                </div>

                <div className="desc">
                  <h5>Description</h5>
                  <p>{element.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default heroBanner;
