import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Corrected path to import global styles
import App from './App'; // Import the App component

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
