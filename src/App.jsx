import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Realisations from './pages/Realisations';
import Contact from './pages/Contact';
import Merci from './pages/Merci';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merci" element={<Merci />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
