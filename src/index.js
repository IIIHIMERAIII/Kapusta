import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/react-homework-template">
        <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </BrowserRouter>
      {/* </PersistGate>
      </Provider> */}
  </React.StrictMode>
);
