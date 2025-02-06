import { Routes, Route } from 'react-router';

import Header from '@/components/layouts/Header/Header.jsx';
import Main from '@/components/pages/Main/Main.jsx';
import Footer from '@/components/layouts/Footer/Footer.jsx';
import Community from '@/components/ui/Forms/Community/Community.jsx';
import { useModal } from '@/context/ModalContext.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <CommunityWrapper />
    </>
  );
}

const CommunityWrapper = () => {
  const { isOpen, closeModal } = useModal();

  return isOpen ? <Community onClose={closeModal} /> : null;
};

export default App;
