import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';

import ErrorBoundary from '_modules/error-boundary';

import App from './App'
import { theme, GlobalStyle } from './style';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyle />
          <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
)
