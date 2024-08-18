import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import { breakpoints } from './breakpoints';
import componentsOverride from './overrides';
import { paletteGenerator } from './palette';
import { shape } from './shape';
import { typography } from './typography';
import { useTranslation } from 'react-i18next';


const ThemeConfig = ({ children }) => {
  const { i18n } = useTranslation();
  const direction = i18n === 'en' ? 'ltr' : 'rtl';

  const themeOptions = useMemo(
    () => ({
      palette: paletteGenerator('light'),
      shape,
      typography,
      direction,
      breakpoints,
    }),
    [direction, i18n]
  );

  const theme = createTheme(themeOptions);

  theme.components = componentsOverride(theme);

  // const cacheRtl = createCache({
  //   key: 'muirtl',
  //   stylisPlugins: [prefixer, rtlPlugin],
  // });

  const cacheRtl = createCache({
    key: direction === 'rtl' ? 'muirtl' : 'muiltr',
    stylisPlugins: direction === 'rtl' ? [rtlPlugin] : [],
  });

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cacheRtl}>
        <CssBaseline />
        <Box
          sx={{
            height: '100%',
          }}
        >
          {children}
        </Box>
      </CacheProvider>
    </ThemeProvider>
  );
};

export default ThemeConfig;
