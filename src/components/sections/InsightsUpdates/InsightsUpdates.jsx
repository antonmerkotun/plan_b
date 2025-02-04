import { useRef } from 'react';
import { ReactSVG } from 'react-svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import InsightsUpdatesCard from '@/components/blocks/InsightsUpdatesCard/InsightsUpdatesCard.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import arrow from '@/assets/icons/arrow-white.svg';
import { INSIGHTSUPDATES } from '@/data/insights-updates.js';
import circle from '@/assets/icons/insights-updates-circle.svg';
import styles from '@/components/sections/InsightsUpdates/InsightsUpdates.module.scss';

const InsightsUpdates = () => {
  const swiperRef = useRef(null);

  return (
    <section id="insights-updates-section" className={styles.section}>
      <div className={styles.info}>
        <div>
          <h1 className={styles.title}>Insights & Updates</h1>
          <p className={styles.description}>
            Latest News and Perspectives on Blockchain Trends and Innovations
          </p>
        </div>
        <Button className={styles.button} name="See all" />
      </div>
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        spaceBetween={30}
        speed={800}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 3,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className={styles.swiper}
        watchSlidesProgress={true}
      >
        {INSIGHTSUPDATES.map((card, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <InsightsUpdatesCard card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <Button
          type="slider"
          icon={arrow}
          onClick={() => swiperRef.current?.slidePrev()}
          isReverse
        />
        <Button
          type="slider"
          icon={arrow}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
      {/*<ReactSVG className="insights-updates-background" src={circle} />*/}
    </section>
  );
};

export default InsightsUpdates;
