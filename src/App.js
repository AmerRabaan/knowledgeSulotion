import { Route, Routes } from 'react-router';
import logo from './logo.svg';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import TeamPage from './pages/Team';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookPage';
import PrivacyPage from './pages/PrivacyPage';
import ChatButton from './components/Chatbutton';

function App() {
  const {t, i18n } = useTranslation()
  return (
    <div className="App">
      <Navbar />   
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/book' element={<BookingPage />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/team' element={<TeamPage />}/>
        <Route path='/contact' element={<ContactPage />}/>
        <Route path='/book' element={<BookingPage />}/>
        <Route path='/privacy-policy' element={<PrivacyPage />}/>
      </Routes>
      <ChatButton />
      <Footer />
    </div>
  );
}

export default App;
