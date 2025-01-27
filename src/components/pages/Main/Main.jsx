import CubeSection from '@/components/sections/CubeSection/CubeSection.jsx';
import BenefitsSection from '@/components/sections/BenefitsSection/BenefitsSection.jsx';
import styles from '@/components/pages/Main/Main.module.scss';

const Main = () => {
  return (
    <main className={`${styles.main} container`}>
      <CubeSection />
      {/*<BenefitsSection />*/}
    </main>
  );
};

export default Main;
