import React, { useState, useEffect } from 'react';

function App() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [responseMessage, setResponseMessage] = useState(''); // New state to store the response message

 const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      const data = await response.json();
      setResponseMessage(data.message); // Set the response message
    } catch (error) {
      console.error('Error:', error);
      setResponseMessage('An error occurred. Please try again.'); // Set an error message
    }
 };

 return (
    <div className="App">
      <h1>Enter Your Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Response:</h2>
        <p>{responseMessage}</p>
      </div>
    </div>
 );
}

export default App;
