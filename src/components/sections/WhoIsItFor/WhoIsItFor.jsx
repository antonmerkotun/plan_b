import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FeaturesCard from '@/components/blocks/FeaturesCard/FeaturesCard.jsx';
import { ReactSVG } from 'react-svg';
import { WHOISITFOR } from '@/data/who-is-it-for.js';
import layer from '@/assets/icons/layer.svg';
import arrow from '@/assets/icons/arrow-black.svg';
import circle from '@/assets/icons/circle.svg';
import styles from '@/components/sections/WhoIsItFor/WhoIsItFor.module.scss';

gsap.registerPlugin(ScrollTrigger);

const WhoIsItFor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const progress = progressRef.current;
    const cards = gsap.utils.toArray(content.children);
    const cardHeight = cards[0].offsetHeight;
    const arrow = arrowRef.current.children[0].children[0];
    const gap = 32;
    const startScroll = window.innerHeight / 2 - cardHeight / 2;
    const endScroll = window.innerHeight / 2 + gap * cards.length;

    const trigger = gsap.timeline({
      paused: true,
      scrollTrigger: {
        id: 'who-it-for',
        trigger: section,
        start: 'top top',
        end: `bottom+=${(cards.length - 1) * 1000} center`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const activeIndex = Math.floor(self.progress * cards.length);
          setActiveIndex(activeIndex);

          gsap.to(arrow, {
            rotation: -self.progress * 80,
          });
        },
      },
    });

    // gsap.set(progress, {
    //   position: 'absolute',
    //   top: '-331',
    //   width: '896',
    //   height: '896',
    //   left: 0,
    //   right: 0,
    //   margin: '0 auto',
    //   borderRadius: '50%',
    //   // background: `#4C8D91`,
    //   zIndex: 0,
    // });

    trigger
      .set(content, {
        y: startScroll,
      })
      .to(content, {
        y: -endScroll,
        ease: 'power1.inOut',
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      trigger.kill();
    };
  }, []);

  return (
    <section
      id="who-is-it-for-section"
      ref={sectionRef}
      className={styles.section}
    >
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
        {WHOISITFOR.map((card, index) => (
          <div key={card.title} className={styles.point}>
            <ReactSVG
              className={`${styles.icon} ${index === activeIndex ? styles.activeIcon : ''}`}
              src={circle}
            />
            <span
              className={`${styles.numbers}  ${index === activeIndex ? styles.activeNumber : ''}`}
            >
              0{index + 1}
            </span>
          </div>
        ))}
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
      {/*<div ref={progressRef} className={styles.progressBar}></div>*/}
      <div ref={arrowRef} className={styles.arrow}>
        <ReactSVG src={arrow} />
      </div>
    </section>
  );
};

export default WhoIsItFor;
