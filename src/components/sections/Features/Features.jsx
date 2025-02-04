import { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Button from '@/components/ui/Button/Button.jsx';
import FeaturesCard from '@/components/blocks/FeaturesCard/FeaturesCard.jsx';
import EnergyLiquid from '@/components/blocks/Spline/EnergyLiquid/EnergyLiquid.jsx';
import { FEATURES } from '@/data/features.js';
import circle from '@/assets/icons/circle.svg';
import line from '@/assets/icons/line.svg';
import styles from '@/components/sections/Features/Features.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = gsap.utils.toArray(content.children);
    const cardHeight = cards[0].offsetHeight;
    const gap = 16;
    const startScroll = window.innerHeight / 2 - cardHeight / 2;
    const endScroll = window.innerHeight / 2 + gap * (cards.length - 1);

    triggerRef.current = gsap.timeline({
      paused: true,
      scrollTrigger: {
        id: 'features-section',
        trigger: section,
        start: 'top+=5 top',
        end: `bottom+=${cards.length * 1000} center`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const activeIndex = Math.floor(self.progress * cards.length);
          setActiveIndex(activeIndex);
        },
      },
    });

    triggerRef.current
      .set(content, {
        y: startScroll,
      })
      .to(content, {
        y: -endScroll,
        ease: 'power1.inOut',
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      triggerRef.current.kill();
    };
  }, []);

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
        <Button name="Start Exploring" className={styles.button} />
      </div>
      <div className={styles.center}>
        {FEATURES.map((card, index) => (
          <div key={card.title} className={styles.point}>
            <span
              className={`${styles.pointTitle} ${index === activeIndex ? styles.activeTitle : ''}`}
            >
              {card.title}
            </span>
            <ReactSVG
              className={`${styles.icon} ${index === activeIndex ? styles.activeIcon : ''}`}
              src={circle}
            />
            <ReactSVG
              className={`${styles.line} ${index === activeIndex ? styles.activeLine : ''}`}
              src={line}
            />
          </div>
        ))}
        <EnergyLiquid />
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

export default Features;

// const handlePointClick = (index) => {
//   if (index === activeIndex) return;
//   const content = contentRef.current;
//   const cards = gsap.utils.toArray(content.children);
//   const cardHeight = cards[index].offsetHeight;
//   const scrollAmount = Math.abs(index - activeIndex);
//
//   const scrollOffset = cardHeight * scrollAmount + 1000 - 16 * cards.length;
//
//   if (index > activeIndex) {
//     window.scrollBy({
//       top: scrollOffset,
//       behavior: 'smooth',
//     });
//   } else {
//     window.scrollBy({
//       top: -scrollOffset,
//       behavior: 'smooth',
//     });
//   }
// };
