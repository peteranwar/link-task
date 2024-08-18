import { useEffect } from 'react';
import Layout from './components/layout';
import Home from './pages/Home';
import './scss/style.scss';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


import ThemeConfig from "./theme/index"
import { useTranslation } from 'react-i18next';
import localStorageProvider from './localStorageProvider';
import { QueryClientProvider } from 'react-query';
import { queryClient } from "./libs/react-query";
import HttpHelpers from './services/helpers';
import News from './pages/News';

HttpHelpers.setBaseUrl(process.env.REACT_APP_API_ENDPOINT);

console.log('process.env.REACT_APP_API_ENDPOINT',process.env.REACT_APP_API_ENDPOINT)
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
