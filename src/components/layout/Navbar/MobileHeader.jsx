
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import MainImage from '../../shared/ImageMain';
import { menuIcon } from '../../../SVGs';

const MobileHeader = ({ handleDrawerToggle }) => {
  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Link to='/'>
        <MainImage
          name='Logo.png'
          alt='link company logo'
          width={190}
          height={72}
          sx={{
            width: '120px',
            height: '40px',
            objectFit: 'contain'
          }}
        />
      </Link>

      <IconButton
        color='primary'
        aria-label='open drawer'
        edge='start'
        onClick={handleDrawerToggle}
        sx={{ display: { xs: 'block', md: 'none', zIndex: 999999 }, width: 40, height: 40 }}
      >
        {menuIcon}
      </IconButton>
    </Box>
  );
};

export default MobileHeader;
