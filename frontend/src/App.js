import React, { useState } from 'react';
import './App.css'; // Keep your existing CSS import
import Login from './components/Login.js'; // Import the Login component
import Register from './components/Register'; // Import the Register component
import Chat from './components/Chat'; // Import your existing Chat component

function App() {
  const [token, setToken] = useState(null); // State to store the JWT token

  return (
    <div className="App">
      {!token ? (
        <>
          {/* Render Login and Register components when the user is not logged in */}
          <Login setToken={setToken} />
          <Register />
        </>
      ) : (
        // Render the Chat component when the user is logged in
        <Chat token={token} />
      )}
    </div>
  );
}

export default App;
