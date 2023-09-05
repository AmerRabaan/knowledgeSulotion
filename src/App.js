import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import  Navbar  from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import TeamPage from './pages/Team';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookPage';
import PrivacyPage from './pages/PrivacyPage';
import ChatButton from './components/Chatbutton';
import Career from './pages/Career';
import Careerbutton from './components/Careerbutton';

function App() {

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
        <Route path='/career' element={<Career />}/>
      </Routes>
      <ChatButton />
      <Footer />
    </div>
  );
}

export default App;
