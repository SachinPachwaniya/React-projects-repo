import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Card/>
  </React.StrictMode>
);


