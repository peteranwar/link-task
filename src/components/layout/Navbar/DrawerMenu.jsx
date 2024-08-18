import { Link } from 'react-router-dom';

//  Material Ui Components
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';

import ImageMain from "../../shared/ImageMain"
import { closeNav } from '../../../SVGs';
import AuthBtns from './AuthBtns';

const DrawerMenu = ({
  handleDrawerToggle,
  navItems,
  handleMenuClose,
  changeLanguage,
  i18n,
  t
}) => {

  return (
    <Box
      sx={{
        textAlign: 'center',
        '&::-webkit-scrollbar': {
          width: '0',
        },
      }}
    >
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        sx={{ my: 2, px: 2 }}
      >
        <ImageMain
          imgSrc='/assets/images/logo-white.png'
          alt='care with beauty logo'
          width={110}
          height={70}
        />
        <Box
          onClick={handleDrawerToggle}
          sx={{
            cursor: 'pointer',
            width: '45px',
            height: '45px',
            borderRadius: '9px',
            border: '1px solid currentColor',
            borderColor: 'common.white',
          }}
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          {closeNav}
        </Box>
      </Box>
      <List
        sx={{
          height: '100%',
          pt: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {navItems.map(item => <ListItem py={0} sx={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <Typography
            variant='h6'
            color='common.white'
            px={2}
            my={1.5}
            sx={{ textDecoration: 'none' }}
            component={Link}
            to={item.url}
            key={item.id}
            onClick={handleDrawerToggle}
          >
            {item.text}
          </Typography>
        </ListItem>

        )}

        {/* Auth Buttons */}
        <Box display='flex' flexDirection='column' alignItems='center'>
          <AuthBtns t={t} color='common.white' />
        </Box>
        {/* Language */}
        <Box
          mt={4}
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
        >
          <Box display='flex' alignItems='center'>
            <Typography sx={{ fontSize: '14px', mx: 0.5 }} color='common.white'>
              {t('navbar.lang')}
            </Typography>
          </Box>

          <Box mt={2}>
            <Button
              onClick={() => {
                changeLanguage('ar');
                handleDrawerToggle();
              }}
              component={Link}
              locale='ar'
              variant='outlined'
              sx={{
                pointerEvents: i18n.language === 'ar' && 'none',
                mx: 1,
                color:
                  i18n.language === 'ar' ? 'rgba(255, 255, 255, 0.54)' : 'common.white',
                borderColor:
                  i18n.language === 'ar' ? 'rgba(255, 255, 255, 0.54)' : 'common.white',
                px: 3,
                height: '40px',
                borderRadius: '8px',
                '&:hover': { borderColor: 'common.white' },
              }}
            >
              العربية
            </Button>

            <Button
              onClick={() => {
                changeLanguage('en');
                handleMenuClose();
                handleDrawerToggle();
              }}
              component={Link}
              locale='en'
              variant='outlined'
              sx={{
                pointerEvents: i18n.language === 'en' && 'none',
                mx: 1,
                color:
                  i18n.language === 'en' ? '#ffffff8a' : 'common.white',
                borderColor:
                  i18n.language === 'en' ? '#ffffff8a' : 'common.white',
                px: 3,
                height: '40px',
                borderRadius: '8px',
                '&:hover': { borderColor: 'common.white' },
              }}
            >
              English
            </Button>
          </Box>
        </Box>
      </List>
    </Box>
  );
};

export default DrawerMenu;
