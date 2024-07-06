import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isClick, setIsClick] = useState(false);

  const handleFirst = (e) => {
    setFirstName(e.target.value);
  };

  const handleSecond = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
        <br />
        Last Name:
        <input
          type="text"
          required
          value={lastName}
          onChange={handleSecond}
        />
        <br />
        <button type="submit">Submit</button> 
      </form>
      <br />
      {isClick ? `Full Name: ${firstName} ${lastName}` : ''}
    </div>
  );
}

export default App;
