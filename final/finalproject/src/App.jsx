import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import University from './University';
import Sports from './Sports';
import Sea from './Sea';
import Settings from './Settings';
import Header from './Header'; 
import Footer from './Footer'; 
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
      <Header /> 
      <Navbar setCurrentPage={setCurrentPage} handleThemeChange={handleThemeChange} />
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'university' && <University />}
        {currentPage === 'sports' && <Sports />}
        {currentPage === 'sea' && <Sea />}
        {currentPage === 'settings' && <Settings />}
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
