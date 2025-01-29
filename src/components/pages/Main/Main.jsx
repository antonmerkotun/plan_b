import CubeSection from '@/components/sections/CubeSection/CubeSection.jsx';
import BenefitsSection from '@/components/sections/BenefitsSection/BenefitsSection.jsx';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection.jsx';
import WhoIsItFor from '@/components/sections/WhoIsItFor/WhoIsItFor.jsx';
import styles from '@/components/pages/Main/Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <CubeSection />
      <BenefitsSection />
      <FeaturesSection />
      <WhoIsItFor />
    </main>
  );
};

export default Main;
