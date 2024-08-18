import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


//  Material Ui Components
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';

import { useTranslation } from 'react-i18next';


import DesktopHeader, {
  RenderLanguageMenu,
} from './DesktopHeader';
import DrawerMenu from './DrawerMenu';
import MobileHeader from './MobileHeader';


import localStorageProvider from '../../../localStorageProvider';


const drawerWidth = '100%';

function Navbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const isLanguageMenuOpen = Boolean(anchorEl);

  const { t, i18n } = useTranslation();



  const navItems = [
    {
      text: t('navbar.home'),
      url: '/',
      id: 'home',
    },
    {
      text: t('navbar.aboutUs'),
      url: '/about-us',
      id: 'about-us',
    },
    {
      text: t('navbar.news'),
      url: '/news',
      id: 'about-us',
    },
    {
      text: t('navbar.contactUs'),
      url: '/contact-us',
      id: 'contact-us',
    },
  ];

  const changeLanguage = useCallback(
    lng => {
      i18n.changeLanguage(lng);
      document.querySelector('html').dir = i18n.dir();
      document.querySelector('html').lang = lng;
      localStorageProvider.set('locale', lng);
      handleMenuClose()
    },
    [i18n]
  );

  const handleLanguageMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  console.log('cccc', colorChange)

  const changeNavbarColor = () => {
    if (window.scrollY >= 60) {
      setColorChange(true);
    }
    else {
      setColorChange(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    };
  }, [])


  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar
          component='nav'
          sx={{
            boxShadow: 'none',
            transition: 'all .5s ease',
            backgroundColor: colorChange ? 'common.white' : 'transparent',
            py: 0.5,
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12}>
                <Toolbar sx={{ padding: '0 !important' }}>
                  {/* NAVBAR in MOBILE */}
                  <MobileHeader {...{ handleDrawerToggle }} />

                  {/* NAVBAR in DESKTOP */}
                  <DesktopHeader
                    {...{
                      t,
                      navItems,
                      handleLanguageMenuOpen,
                      i18n,
                      changeLanguage,
                    }}
                  />

                  <RenderLanguageMenu
                    {...{ t, i18n, changeLanguage, anchorEl, isLanguageMenuOpen, handleMenuClose }}
                  />
                </Toolbar>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            // container={navContainer}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none', zIndex: 9999 },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <DrawerMenu
              {...{ t, handleDrawerToggle, navItems, handleMenuClose, changeLanguage, i18n }}
            />
          </Drawer>
        </nav>
        {/* <Box pt={{ xs: '30px', sm: '40px' }} /> */}
      </Box>
    </>
  );
}

export default Navbar;
