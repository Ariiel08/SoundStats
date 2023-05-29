import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';
import { SoundStatsApp } from './SoundStatsApp';
import { TokenProvider, UserProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(

    <TokenProvider>
      <UserProvider>
        <BrowserRouter>
          <SoundStatsApp />
        </BrowserRouter>
      </UserProvider>
    </TokenProvider>
  
)
