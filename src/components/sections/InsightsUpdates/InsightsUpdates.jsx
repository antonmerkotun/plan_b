import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import InsightsUpdatesCard from '@/components/blocks/InsightsUpdatesCard/InsightsUpdatesCard.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import { INSIGHTSUPDATES } from '@/data/insights-updates.js';
import arrow from '@/assets/icons/arrow-white.svg';
import styles from '@/components/sections/InsightsUpdates/InsightsUpdates.module.scss';

const InsightsUpdates = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="insights-updates-section" className={styles.section}>
      <div className={styles.info}>
        <div className={styles.content}>
          <h1 className={styles.title}>Insights & Updates</h1>
          <p className={styles.description}>
            Latest News and Perspectives on Blockchain Trends and Innovations
          </p>
        </div>
        <Button className={styles.button} name="See all" />
      </div>
      <div className={styles.slider}>
        <Swiper
          className={styles.swiper}
          effect={'coverflow'}
          observer={true}
          observeParents={true}
          centeredSlides={true}
          slidesPerView={'auto'}
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
          watchSlidesProgress={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {INSIGHTSUPDATES.map((card, index) => (
            <SwiperSlide
              key={index}
              className={`${styles.slide} ${activeIndex === index ? styles.slideActive : styles.slideDeactive}`}
            >
              <InsightsUpdatesCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
    </section>
  );
};

export default InsightsUpdates;
