import React, { useState } from 'react';

const Follow = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [checkedError, setCheckedError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '' && isChecked) {
      setSubmittedData({ email, isChecked });
    } else {
      if (email.trim() === '') {
        setEmailError('Email is required');
      } else {
        setEmailError('');
      }
      if (!isChecked) {
        setCheckedError('Please confirm to receive notifications');
      } else {
        setCheckedError('');
      }
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Follow</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div>
            <label>
              <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
              I have confirmed to receive notifications.
            </label>
            {checkedError && <p className="error">{checkedError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {submittedData && (
          <div>
            <h3>Submitted Information:</h3>
            <p>Email: {submittedData.email}</p>
            <p>I have confirmed to receive notifications: {submittedData.isChecked.toString()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Follow;
