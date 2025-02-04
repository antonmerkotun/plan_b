import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@/components/sections/FAQ/FAQ.module.scss';

import { FAQS } from '@/data/faq.js';
import FAQCard from '@/components/blocks/FAQCard/FAQCard.jsx';
import Button from '@/components/ui/Button/Button.jsx';
import arrow from '@/assets/icons/arrow-white.svg';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

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
      <div className={styles.left}>
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
      <div className={styles.right}>
        {FAQS.map((card, index) => (
          <div key={card.question} onClick={() => handleCardClick(index)}>
            <FAQCard
              card={card}
              isSmall={true}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
