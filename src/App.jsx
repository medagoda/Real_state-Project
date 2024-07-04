import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Latest_Packages from './component/Latest_Packages';
import Navbar from './component/Navbar';
import RealEstate from './component/RealEstate';
import Services from './component/Services';
import WHO from './component/WHO';
import { useState } from 'react';
import Modal from './component/Modal';
import LoginForm from './component/LoginForm';
import SignupForm from './component/SignupForm';
import ListingHomes from './component/ListingHomes';
import { useLocation } from 'react-router-dom';

function MainContent() {
  const location = useLocation();
  
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <RealEstate />
              <hr className='font-semibold text-3xl bg-slate-900 h-0.25 mx-12 my-5' />
              <WHO />
              <br />
              <Latest_Packages />
              <Services />
            </main>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<WHO />} />
        <Route path="/listings" element={<ListingHomes />} />
      </Routes>
      
      {location.pathname !== '/listings' && <Footer />}
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToSignup = () => {
    setIsLoginForm(false);
  };

  const switchToLogin = () => {
    setIsLoginForm(true);
  };

  return (
    <Router>
      <Navbar toggleModal={toggleModal} />
      <hr className='font-semibold text-3xl bg-slate-900 mx-10 my-5' />
      <MainContent />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          {isLoginForm ? (
            <LoginForm switchToSignup={switchToSignup} />
          ) : (
            <SignupForm switchToLogin={switchToLogin} />
          )}
        </Modal>
      )}
    </Router>
  );
}

export default App;
