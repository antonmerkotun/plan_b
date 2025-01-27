import { Routes, Route } from 'react-router';

import Header from '@/components/layouts/Header/Header.jsx';
import Navigation from '@/components/ui/Navigation/Navigation.jsx';
import SocialMedia from '@/components/ui/SocialMedia/SocialMedia.jsx';
import Main from '@/components/pages/Main/Main.jsx';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <SocialMedia />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
