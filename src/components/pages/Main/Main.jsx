import CubeSection from '@/components/sections/CubeSection/CubeSection.jsx';
import BenefitsSection from '@/components/sections/BenefitsSection/BenefitsSection.jsx';
import styles from '@/components/pages/Main/Main.module.scss';

const Main = () => {
  return (
    <main className={`${styles.main}`}>
      <CubeSection />
      <BenefitsSection />
      <div style={{ height: '3000px' }}></div>
    </main>
  );
};

export default Main;
