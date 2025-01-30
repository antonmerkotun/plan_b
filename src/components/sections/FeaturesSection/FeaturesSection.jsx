import React, { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '@/components/ui/Button/Button.jsx';
import FeaturesCard from '@/components/blocks/FeaturesCard/FeaturesCard.jsx';
import { FEATURES } from '@/data/features.js';
import circle from '@/assets/icons/circle.svg';
import styles from '@/components/sections/FeaturesSection/FeaturesSection.module.scss';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = gsap.utils.toArray(content.children);
    const cardHeight = cards[0].offsetHeight;
    const gap = 16;

    const contentHeight = content.offsetHeight;

    const trigger = gsap.timeline({
      paused: true,
      scrollTrigger: {
        id: 'features-section',
        trigger: section,
        start: 'top top',
        end: `+=${(contentHeight - cardHeight - gap * cards.length) * 1.5 + 3000}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const rounded = Math.floor(progress * 100);

          console.log(rounded);

          if (rounded >= 0) {
            setActiveIndex(0);
          }

          if (rounded >= 30) {
            setActiveIndex(1);
          }

          if (rounded >= 45) {
            setActiveIndex(2);
          }

          if (rounded >= 80) {
            setActiveIndex(3);
          }
        },
      },
    });

    const startScroll = window.innerHeight / 2 - cardHeight / 2;
    const endScroll = window.innerHeight / 2 - gap;
    console.log(endScroll);
    trigger
      .set(content, {
        y: startScroll,
      })
      .to(content, {
        y: `-${endScroll}`,
        ease: 'power1.inOut',
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      trigger.kill();
    };
  }, []);

  const handlePointClick = (index) => {
    if (index === activeIndex) return;

    const cards = gsap.utils.toArray(contentRef.current.children);
    const card = cards[index];

    gsap.to(contentRef.current, {
      duration: 0.6,
      ease: 'power2.out',
      y: -card.offsetTop + window.innerHeight / 2 - card.offsetHeight / 2,
    });

    // setActiveIndex(index);
  };

  return (
    <section id="features-section" ref={sectionRef} className={styles.section}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h2 className={styles.title}>Features Overview</h2>
          <p className={styles.description}>
            Key Aspects include cross-chain compatibility, efficient growth,
            fast processing, and strong protection
          </p>
        </div>
        <Button name="Start Exploring" />
      </div>
      <div className={styles.center}>
        {FEATURES.map((card, index) => (
          <div key={card.title} className={styles.point}>
            <span
              className={`${styles.pointTitle} ${index === activeIndex ? styles.activeTitle : ''}`}
              onClick={() => handlePointClick(index)}
            >
              {card.title}
            </span>
            <ReactSVG
              className={`${styles.icon} ${index === activeIndex ? styles.activeIcon : ''}`}
              src={circle}
            />
          </div>
        ))}
      </div>
      <div ref={contentRef} className={styles.right}>
        {FEATURES.map((card, index) => (
          <FeaturesCard
            key={card.title}
            card={card}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
