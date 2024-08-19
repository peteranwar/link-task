import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { useTranslation } from 'react-i18next';

import Layout from './components/layout';
import Home from './pages/Home';
import './scss/style.scss';

import ThemeConfig from "./theme/index"
import localStorageProvider from './localStorageProvider';
import { queryClient } from "./libs/react-query";
import HttpHelpers from './services/helpers';
import News from './pages/News';

HttpHelpers.setBaseUrl(process.env.REACT_APP_API_ENDPOINT);


function App() {
  const { i18n } = useTranslation();


  useEffect(() => {
    localStorageProvider.get('locale').then(lng => {
      let locale;
      if (!lng) {
        locale = 'en';
      } else {
        locale = lng;
      }
      if (!lng) localStorageProvider.set('locale', locale);
      i18n.changeLanguage(locale);
      document.querySelector('html').dir = i18n.dir();
      document.querySelector('html').lang = locale;
    });
  }, [i18n]);


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfig>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/news' element={<News />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeConfig>
    </QueryClientProvider>
  );

}

export default App;
