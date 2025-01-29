import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FeaturesCard from '@/components/blocks/FeaturesCard/FeaturesCard.jsx';
import { ReactSVG } from 'react-svg';
import layer from '@/assets/icons/layer.svg';
import arrow from '@/assets/icons/arrow-black.svg';
import styles from '@/components/sections/WhoIsItFor/WhoIsItFor.module.scss';
import { WHOISITFOR } from '@/data/who-is-it-for.js';

gsap.registerPlugin(ScrollTrigger);

const WhoIsItFor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = gsap.utils.toArray(content.children);
    const cardHeight = cards[0].offsetHeight;
    const gap = 32;

    cards.forEach((card, index) => {
      ScrollTrigger.create({
        id: 'it-for',
        trigger: card,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.5,
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    const contentHeight = content.offsetHeight;

    const trigger = gsap.timeline({
      paused: true,
      scrollTrigger: {
        id: 'it-for',
        trigger: section,
        start: 'top top',
        end: `+=${(contentHeight - cardHeight - gap * cards.length) * 1.5}`,
        scrub: true,
        pin: true,
      },
    });

    trigger
      .set(content, {
        y: cardHeight,
      })
      .to(content, {
        y: `-${contentHeight - cardHeight - gap * cards.length}`,
        ease: 'power1.inOut',
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      trigger.kill();
    };
  }, []);

  return (
    <section id="it-for-section" ref={sectionRef} className={styles.section}>
      <div className={styles.left}>
        <div className={styles.content}>
          <h2 className={styles.title}>Who’s It For?</h2>
          <p className={styles.description}>
            Designed for businesses, miners, developers, and crypto enthusiasts
            looking to innovate and grow
          </p>
        </div>
      </div>
      <div className={styles.center}>
        {/*{ITFOR.map((card, index) => (*/}
        {/*  <div key={card.title} className={styles.point}>*/}
        {/*    <span*/}
        {/*      className={`${styles.pointTitle} ${index === activeIndex ? styles.activeTitle : ''}`}*/}
        {/*    >*/}
        {/*      {card.title}*/}
        {/*    </span>*/}
        {/*    <ReactSVG*/}
        {/*      className={`${styles.icon} ${index === activeIndex ? styles.activeIcon : ''}`}*/}
        {/*      src={circle}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
      <div ref={contentRef} className={styles.right}>
        {WHOISITFOR.map((card, index) => (
          <FeaturesCard
            key={card.title}
            card={card}
            className={styles.card}
            isActive={index === activeIndex}
            isButton={index === activeIndex}
            buttonText={'Start Exploring'}
          />
        ))}
      </div>
      <ReactSVG className={styles.layer} src={layer} />
      <ReactSVG className={styles.arrow} src={arrow} />
    </section>
  );
};

export default WhoIsItFor;
