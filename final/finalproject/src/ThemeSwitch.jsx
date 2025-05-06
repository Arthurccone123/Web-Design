import React, { useState } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>Toggle Theme</button>
  );
}

export default ThemeSwitch;
