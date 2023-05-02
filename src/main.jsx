import React from 'react';
import ReactDOM from 'react-dom/client';
import { StatsPage } from './soundstats/pages/StatsPage';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StatsPage />
  </React.StrictMode>,
)
