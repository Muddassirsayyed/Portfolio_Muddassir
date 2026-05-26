import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(6, 13, 30, 0.95)',
          color: '#f0f9ff',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '10px',
          fontFamily: 'Outfit, sans-serif',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 30px rgba(6, 182, 212, 0.15)',
        },
        success: { iconTheme: { primary: '#06b6d4', secondary: '#f0f9ff' } },
        error: { iconTheme: { primary: '#ef4444', secondary: '#f0f9ff' } },
      }}
    />
  </React.StrictMode>
);
