import { Routes, Route } from 'react-router';

import Header from '@/components/layouts/Header/Header.jsx';
import Main from '@/components/pages/Main/Main.jsx';
import Footer from '@/components/layouts/Footer/Footer.jsx';
import Community from '@/components/ui/Forms/Community/Community.jsx';
import PrivacyPolicy from '@/components/ui/Forms/PrivacyPolicy/PrivacyPolicy.jsx';
import TermsAndConditions from '@/components/ui/Forms/TermsAndConditions/TermsAndConditions.jsx';
import { useModal } from '@/context/ModalContext.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
      <ModalWrapper />
    </>
  );
}

const ModalWrapper = () => {
  const { modalType, closeModal } = useModal();
  if (!modalType) return null;

  const MODAL_COMPONENTS = {
    community: Community,
    privacyPolicy: PrivacyPolicy,
    termsAndConditions: TermsAndConditions,
  };

  const ModalComponent = MODAL_COMPONENTS[modalType];

  return ModalComponent ? <ModalComponent onClose={closeModal} /> : null;
};

export default App;
