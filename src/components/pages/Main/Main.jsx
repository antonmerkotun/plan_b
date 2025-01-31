import Cube from '@/components/sections/Cube/Cube.jsx';
import Benefits from '@/components/sections/Benefits/Benefits.jsx';
import Features from '@/components/sections/Features/Features.jsx';
import WhoIsItFor from '@/components/sections/WhoIsItFor/WhoIsItFor.jsx';
import InsightsUpdates from '@/components/sections/InsightsUpdates/InsightsUpdates.jsx';
import ReadyToExperience from '@/components/sections/ReadyToExperience/ReadyToExperience.jsx';
import styles from '@/components/pages/Main/Main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Cube />
      <Benefits />
      <Features />
      <WhoIsItFor />
      <InsightsUpdates />
      <ReadyToExperience />
    </main>
  );
};

export default Main;
