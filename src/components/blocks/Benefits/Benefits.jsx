import React from 'react';
import { ReactSVG } from 'react-svg';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import arrowRight from '@/assets/icons/arrow-right.svg';
import { SLIDES } from '@/components/blocks/Benefits/benefits.data';
import Button from '@/components/ui/Button/Button.jsx';
import BenefitsCard from '@/components/ui/BenefitsCard/BenefitsCard.jsx';
import '@/components/blocks/Benefits/Benefits.module.scss';
import 'swiper/css';

const Benefits = () => {
  return (
    <section className="benefits-block container">
      <div className="benefits-block__content">
        <h2 className="benefits-block__title">Benefits, that you’ll have</h2>
        <p className="benefits-block__description">
          Plan B is an EVM-compatible blockchain that uses BTC as gas, supports
          staking, dApps, and fast transactions
        </p>
        <div className="benefits-block__actions">
          <Button
            className="swiper-button-prev"
            width={'64px'}
            height={'64px'}
            title={<ReactSVG src={arrowLeft} />}
          />
          <Button
            className="swiper-button-next"
            width={'64px'}
            height={'64px'}
            title={<ReactSVG src={arrowRight} />}
          />
        </div>
      </div>

      <div className="benefits-block__cards">
        <div className="swiper-container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: -75,
              depth: 250,
              modifier: 3.5,
              slideShadows: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {SLIDES.map((slide, index) => (
              <SwiperSlide key={index}>
                <BenefitsCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
