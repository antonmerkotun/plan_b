import { useEffect, useRef } from 'react';

import Cube from '@/components/sections/Cube/Cube.jsx';
import Benefits from '@/components/sections/Benefits/Benefits.jsx';
import Features from '@/components/sections/Features/Features.jsx';
import WhoIsItFor from '@/components/sections/WhoIsItFor/WhoIsItFor.jsx';
import FAQ from '@/components/sections/FAQ/FAQ.jsx';
import InsightsUpdates from '@/components/sections/InsightsUpdates/InsightsUpdates.jsx';
import ReadyToExperience from '@/components/sections/ReadyToExperience/ReadyToExperience.jsx';
import styles from '@/components/pages/Main/Main.module.scss';

const Main = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, 7);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollPosition = entry.target.offsetTop + 100;

            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth',
            });
          }
        });
      },
      { threshold: 0.001 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className={styles.main}>
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Cube />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)} id="benefits">
        <Benefits />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)} id="features">
        <Features />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)} id="who-is-it-for">
        <WhoIsItFor />
      </div>
      {/*<div ref={(el) => (sectionsRef.current[4] = el)} id="faq">*/}
      <FAQ />
      {/*</div>*/}
      {/*<div ref={(el) => (sectionsRef.current[5] = el)} id="insights-updates">*/}
      <InsightsUpdates />
      {/*</div>*/}
      {/*<div ref={(el) => (sectionsRef.current[6] = el)} id="ready-to-experience">*/}
      <ReadyToExperience />
      {/*</div>*/}
    </main>
  );
};

export default Main;
