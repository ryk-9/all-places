import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import MHome from './pages/MHome';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MHome />
  </React.StrictMode>
);