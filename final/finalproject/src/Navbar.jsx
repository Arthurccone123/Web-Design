import React, { useState } from 'react';
import Follow from './Follow';

const Navbar = ({ setCurrentPage, handleThemeChange }) => {
  const [showFollowModal, setShowFollowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);

  const openFollowModal = () => {
    setShowFollowModal(true);
  };

  const closeFollowModal = () => {
    setShowFollowModal(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
  };

  return (
    <nav>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={showMenu ? 'show-menu' : ''}>
        <li><a href="#home" onClick={() => setCurrentPage('home')}>Home</a></li>
        <li><a href="#university" onClick={() => setCurrentPage('university')}>University</a></li>
        <li><a href="#Sports" onClick={() => setCurrentPage('sports')}>Sports</a></li>
        <li><a href="#sea" onClick={() => setCurrentPage('sea')}>Sea</a></li>
        <li className="dropdown">
          <a href="#settings" className="dropbtn" onClick={toggleSettingsMenu}>Settings</a>
          <div className={showSettingsMenu ? 'dropdown-content show' : 'dropdown-content'}>
            <a href="#follow" onClick={openFollowModal}>Follow</a>
            <a href="#theme" onClick={handleThemeChange}>Theme</a>
          </div>
        </li>
      </ul>
      {showFollowModal && <Follow onClose={closeFollowModal} />}
    </nav>
  );
};

export default Navbar;
