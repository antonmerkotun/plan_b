import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import FAQCard from '@/components/blocks/FAQCard/FAQCard.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import { FAQS } from '@/data/faq.js';
import arrow from '@/assets/icons/arrow-white.svg';
import styles from '@/components/sections/FAQ/FAQ.module.scss';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const swiperRef = useRef();

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
      setIsFading(false);
    }, 300);
  };

  const handlePrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex((prev) => prev - 1);
      setIsFading(false);
    }, 300);
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <section id="faq-section" className={styles.section}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.description}>
            Everything You Need to Know with Answers to the Most Frequently
            Asked Questions
          </p>
        </div>
        <div className={styles.navigation}>
          <Button
            type="slider"
            icon={arrow}
            isReverse
            onClick={handlePrev}
            isDisabled={activeIndex === 0}
          />
          <Button
            type="slider"
            icon={arrow}
            onClick={handleNext}
            isDisabled={activeIndex === FAQS.length - 1}
          />
        </div>
      </div>
      <div className={styles.center}>
        <div className={`${isFading ? styles.fadeOut : styles.fadeIn}`}>
          <FAQCard isActive card={FAQS[activeIndex]} />
        </div>
      </div>
      <div className={styles.list}>
        {FAQS.map((card, index) => (
          <div
            key={card.question}
            onClick={() => handleCardClick(index)}
            className={styles.card}
          >
            <FAQCard
              card={card}
              isSmall={true}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
      <div className={styles.slider}>
        <Swiper
          className={styles.swiper}
          speed={500}
          slidesPerView={1.5}
          spaceBetween={10}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {FAQS.map((card, index) => (
            <SwiperSlide key={card.question} className={styles.card}>
              <FAQCard
                card={card}
                isSmall={true}
                isActive={activeIndex === index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.navigationMobile}>
        <Button
          type="slider"
          icon={arrow}
          isReverse
          onClick={() => swiperRef.current?.slidePrev()}
          isDisabled={activeIndex === 0}
        />
        <Button
          type="slider"
          icon={arrow}
          onClick={() => swiperRef.current?.slideNext()}
          isDisabled={activeIndex === FAQS.length - 1}
        />
      </div>
    </section>
  );
};

export default FAQ;
