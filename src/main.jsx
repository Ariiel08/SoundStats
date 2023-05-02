import React from 'react';
import ReactDOM from 'react-dom/client';
import { HomePage, StatsPage } from './soundstats/pages';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <StatsPage /> */}
    <HomePage />
  </React.StrictMode>,
)
