import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { SoundStatsApp } from './SoundStatsApp';
import { TokenProvider } from './context/TokenProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TokenProvider>
      <BrowserRouter>
        <SoundStatsApp />
      </BrowserRouter>
    </TokenProvider>
  </React.StrictMode>,
)
