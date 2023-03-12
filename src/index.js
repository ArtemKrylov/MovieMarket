import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import { theme } from './constants/theme';
import { basename } from 'constants/basename';
console.log('basename: ', basename);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
