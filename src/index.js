import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import storageService from './services/storage-service';
import localeService from './services/locale-service';
import localStorageProvider from './localStorageProvider';
import localeResolver from './localeResolver';
import ErrorBoundary from './components/ErrorBoundry';


storageService.setStorageProvider(localStorageProvider);
localeService.setLocaleResolver(localeResolver);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);


