import { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import InsightsUpdatesCard from '@/components/blocks/InsightsUpdatesCard/InsightsUpdatesCard.jsx';
import SliderButton from '@/components/ui/SliderButton/SliderButton.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import { INSIGHTSUPDATES } from '@/data/insights-updates.js';
import circle from '@/assets/icons/insights-updates-circle.svg';
import '@/components/sections/InsightsUpdates/InsightsUpdates.scss';

const InsightsUpdates = () => {
  const swiperRef = useRef(null);

  return (
    <section id="insights-updates" className="section">
      <div className="insights-updates-text">
        <div>
          <h1>Insights & Updates</h1>
          <p className="insights-updates-description">
            Latest News and Perspectives on Blockchain Trends and Innovations
          </p>
        </div>
        <Button className="insights-updates-button" name="See all" />
      </div>
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 3,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {INSIGHTSUPDATES.map((card, index) => (
          <SwiperSlide key={index}>
            <InsightsUpdatesCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="navigation">
        <SliderButton
          onClick={() => swiperRef.current?.slidePrev()}
          isReverse
        />
        <SliderButton
          onClick={() => {
            console.log(1);
            swiperRef.current?.slideNext();
          }}
        />
      </div>
      {/*<ReactSVG className="insights-updates-background" src={circle} />*/}
    </section>
  );
};

export default InsightsUpdates;
