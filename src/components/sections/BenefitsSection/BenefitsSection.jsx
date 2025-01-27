import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from '@/components/sections/BenefitsSection/BenefitsSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const navigationRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = gsap.utils.toArray(contentRef.current.children);
    const cardWidth = content[0].offsetWidth;
    const windowWidth = window.innerWidth;
    const gap = 56;

    const initialOffset = (windowWidth - cardWidth) / 2;

    gsap.set(content, {
      x: initialOffset,
    });

    const trigger = gsap.to(content, {
      x: () => `-=${(cardWidth + gap) * (content.length - 1)}`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'top-=56 top',
        end: `+=${(cardWidth + gap) * content.length}`,
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleArrowClick = (direction) => {
    const content = gsap.utils.toArray(contentRef.current.children);
    const cardWidth = content[0].offsetWidth;
    const gap = 56; // Відстань між картками

    // Розрахунок нового індексу
    let newIndex = activeIndex + direction;
    newIndex = Math.max(0, Math.min(newIndex, content.length - 1));

    // Оновлення стану
    setActiveIndex(newIndex);

    // Анімація прокрутки
    const targetX = -(newIndex * (cardWidth + gap));
    gsap.to(content, {
      x: targetX,
      duration: 0.5,
      ease: 'power2.out',
    });
  };
  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.leftBlock}>
        <div>
          <h1>Benefits, that you’ll have</h1>
          <p>
            Plan B is an EVM-compatible blockchain that uses BTC as gas,
            supports staking, dApps, and fast transactions
          </p>
        </div>
        <div ref={navigationRef} className={styles.navigation}>
          <button onClick={() => handleArrowClick(-1)}>&lt;</button>
          <button onClick={() => handleArrowClick(1)}>&gt;</button>
        </div>
      </div>
      <div className={styles.cardBlock}>
        <div ref={contentRef} className={styles.horizontalScroll}>
          <div className={styles.card} data-index="0">
            Benefit 1
          </div>
          <div className={styles.card} data-index="1">
            Benefit 2
          </div>
          <div className={styles.card} data-index="2">
            Benefit 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
