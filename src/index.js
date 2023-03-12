import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import { theme } from './constants/theme';
import { basename } from 'constants/basename';
import { UserProvider } from 'utils/userContext';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter basename={basename}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
