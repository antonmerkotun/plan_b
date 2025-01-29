import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import styles from '@/components/sections/BenefitsSection/BenefitsSection.module.scss';
import { SLIDES } from '@/data/benefits.js';
import BenefitsCard from '@/components/blocks/BenefitsCard/BenefitsCard.jsx';
import SliderButton from '@/components/ui/SliderButton/SliderButton.jsx';
import { ReactSVG } from 'react-svg';
import borderCounter from '@/assets/icons/top-left.svg';

gsap.registerPlugin(ScrollTrigger);

const BenefitsSection = () => {
  const [activeIndexTab, setActiveIndexTab] = useState(0);
  const [activeIndexCard, setActiveIndexCard] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const leftBlockRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = gsap.utils.toArray(contentRef.current.children);
    const cardWidth = content[0].offsetWidth;
    const gap = 56;
    const restCards = content.length - 1;

    gsap.set(content, {
      x: 28,
      opacity: 1,
    });

    const trigger = gsap.to(content, {
      x: () => `-=${(cardWidth + gap) * (content.length - 1)}`,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: `+=${(cardWidth + gap) * content.length}`,
        ease: 'power2.out',
        snap: {
          duration: 0.1,
          immediateRender: true,
          snapTo: (value) => Math.round(value * restCards) / restCards,
        },
        onUpdate: ({ progress }) => {
          const activeIndex = Math.round(progress * restCards);
          setActiveIndexCard(activeIndex);

          content.forEach((card, index) => {
            if (index < activeIndex) {
              gsap.set(card, { opacity: 0, duration: 1 });
            } else {
              gsap.set(card, { opacity: 1, duration: 1 });
            }
          });
        },
      },
    });

    return () => {
      trigger.kill();
    };
  }, [activeIndexTab]);

  const handleArrowClick = (direction) => {
    const content = gsap.utils.toArray(contentRef.current.children);
    const cardWidth = content[0].offsetWidth;
    const leftBlockWidth = leftBlockRef.current.offsetWidth;

    const initialOffset =
      (cardWidth * (content.length - 1)) / (content.length - 1) +
      leftBlockWidth -
      110;

    const scrollOffset = direction === 1 ? initialOffset : -initialOffset;

    window.scrollBy({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  const handleTabClick = (index) => {
    if (activeIndexTab === index) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    const content = gsap.utils.toArray(contentRef.current.children);

    gsap.set(content, {
      x: 28,
      opacity: 1,
    });

    setActiveIndexTab(index);
    // setActiveIndexCard(0);
  };

  return (
    <section ref={sectionRef} id="benefits-section" className={styles.section}>
      <div ref={leftBlockRef} className={styles.leftBlock}>
        <div>
          <h1>Benefits, that you’ll have</h1>
          <p>
            Plan B is an EVM-compatible blockchain that uses BTC as gas,
            supports staking, dApps, and fast transactions
          </p>
        </div>
        <div className={styles.navigation}>
          <SliderButton
            onClick={() => handleArrowClick(-1)}
            isReverse
            isDisabled={activeIndexCard === 0}
          />
          <SliderButton
            onClick={() => handleArrowClick(1)}
            isDisabled={activeIndexCard === 3}
          />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.tabs}>
          {SLIDES.map((item, index) => (
            <button
              key={item.title}
              className={`${styles.tab} ${activeIndexTab === index ? styles.tabActive : styles.tabDeactivated}`}
              onClick={() => handleTabClick(index)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className={styles.cardBlock}>
          <div ref={contentRef} className={styles.horizontalScroll}>
            {SLIDES[activeIndexTab].items.map((card, index) => (
              <BenefitsCard
                key={card.name}
                card={card}
                isActive={activeIndexCard === index}
              />
            ))}
          </div>
        </div>
        <div className={styles.counter}>
          <ReactSVG
            className={`${styles.counterBorder} ${styles.counterBorderLeftTop}`}
            src={borderCounter}
          />
          <ReactSVG
            className={`${styles.counterBorder} ${styles.counterBorderLeftBottom}`}
            src={borderCounter}
          />
          <ReactSVG
            className={`${styles.counterBorder} ${styles.counterBorderRightTop}`}
            src={borderCounter}
          />
          <ReactSVG
            className={`${styles.counterBorder} ${styles.counterBorderRightBottom}`}
            src={borderCounter}
          />
          <span className={styles.counterNumber}>{activeIndexCard + 1}</span>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
