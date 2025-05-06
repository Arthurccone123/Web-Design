import React from 'react';

const Settings = ({ handleThemeChange }) => {
  return (
    <div id="settings">
      <h1>Settings Page</h1>
      <button onClick={handleThemeChange}>Toggle Theme</button>
    </div>
  );
}

export default Settings;
