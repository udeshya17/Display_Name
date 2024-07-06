import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isClick, setIsClick] = useState(false);
  const [error, setError] = useState('');

  const handleFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecond = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (firstName.trim() === '' || lastName.trim() === '') {
      setError('Please enter both first name and last name.'); // Provide user feedback when required fields are not filled
      setIsClick(false);
      return;
    }

    setError('');
    setIsClick(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}> 
        First Name:
        <input
          type="text"
          required
          value={firstName}
          onChange={handleFirst}
          aria-label="First Name"
        />
        <br />
        Last Name:
        <input
          type="text"
          required
          value={lastName}
          onChange={handleSecond}
          aria-label="Last Name"
        />
        <br />
        <button type="submit">Submit</button> 
      </form>
      {error && <p>{error}</p>} 
      {isClick && !error ? <p>Full Name: {firstName} {lastName}</p> : ''}
    </div>
  );
}

export default App;
