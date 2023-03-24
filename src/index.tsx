import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Start from './pages/start';
import {lightTheme} from "./themes"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <Start />
    </ThemeProvider>
  </React.StrictMode> 
);