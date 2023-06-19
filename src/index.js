import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/system';
const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#4d5ef9',
    },
    action: {
      active: '#2592fe',
    },
    success: {
      dark: '#599bff',
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/tweets">
      <ThemeProvider theme={theme}></ThemeProvider>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
