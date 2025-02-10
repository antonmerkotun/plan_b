import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactSVG } from 'react-svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import FeaturesCard from '@/components/blocks/FeaturesCard/FeaturesCard.jsx';
import { WHOISITFOR } from '@/data/who-is-it-for.js';
import layer from '@/assets/icons/layer.svg';
import layerTablet from '@/assets/icons/layer-tablet.svg';
import arrow from '@/assets/icons/arrow-black.svg';
import circle from '@/assets/icons/circle.svg';
import styles from '@/components/sections/WhoIsItFor/WhoIsItFor.module.scss';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const WhoIsItFor = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTabletScreen = useMediaQuery({ maxWidth: 1024 });
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const progressPathRef = useRef(null);
  const arrowRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 1024) return;
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = gsap.utils.toArray(content.children);
    const cardHeight = cards[0].offsetHeight;
    const arrow = arrowRef.current.children[0].children[0];
    const gap = 32;
    const startScroll = window.innerHeight / 2 - cardHeight / 2;
    const endScroll = window.innerHeight / 2 + gap * cards.length;

    const progressLine = progressPathRef.current;
    const path = progressLine.querySelector('path');

    const pathLength = path.getTotalLength();
    const segmentLength = pathLength * 0.1;

    gsap.set(path, {
      strokeDasharray: `${100}, ${450}`,
      strokeDashoffset: pathLength,
    });

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
          const adjustedProgress = Math.min(self.progress, 1);
          const activeIndex = Math.floor(self.progress * cards.length);
          setActiveIndex(activeIndex);

          gsap.to(arrow, {
            rotation: -self.progress * 80,
          });

          const progressPosition =
            pathLength * adjustedProgress - segmentLength / 2;
          gsap.to(path, {
            strokeDashoffset: pathLength - progressPosition,
            stroke: '#EE4503',
            ease: 'none',
          });
        },
      },
    });

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

  useEffect(() => {
    if (isTabletScreen && arrowRef.current) {
      const arrow = arrowRef.current.children[0].children[0];

      gsap.to(arrow, {
        rotation: -activeIndex * 30,
        duration: 0.5,
        ease: 'power1.out',
      });
    }
  }, [activeIndex, isTabletScreen]);

  return (
    <section
      id="who-is-it-for-section"
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.info}>
        <h2 className={styles.title}>Who’s It For?</h2>
        <p className={styles.description}>
          Designed for businesses, miners, developers, and crypto enthusiasts
          looking to innovate and grow
        </p>
      </div>
      <div className={styles.center}>
        {WHOISITFOR.map((card, index) => (
          <div key={card.title} className={styles.point}>
            <ReactSVG
              className={`${styles.icon} ${index === activeIndex ? styles.iconActive : ''}`}
              src={circle}
            />
            <span
              className={`${styles.number}  ${index === activeIndex ? styles.numberActive : ''}`}
            >
              0{index + 1}
            </span>
          </div>
        ))}
        <svg
          ref={progressPathRef}
          className={styles.progressLine}
          width="653"
          height="194"
          viewBox="0 0 653 194"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65 64.915C136.209 112.586 221.856 140.389 314 140.389C409.892 140.389 498.747 110.278 571.617 59"
            stroke="#EE4503"
          />
        </svg>
      </div>
      <div ref={contentRef} className={styles.list}>
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
      <div className={styles.slider}>
        <Swiper
          className={styles.swiper}
          effect="slide"
          speed={500}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={isTabletScreen ? 80 : 16}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {WHOISITFOR.map((card, index) => (
            <SwiperSlide key={card.title} className={styles.card}>
              <FeaturesCard
                card={card}
                isButton
                isActive={index === activeIndex}
                buttonText={'Start Exploring'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ReactSVG className={styles.layer} src={layer} />
      <ReactSVG className={styles.layerTablet} src={layerTablet} />
      <div ref={arrowRef} className={styles.arrow}>
        <ReactSVG src={arrow} />
      </div>
    </section>
  );
};

export default WhoIsItFor;
