import { Link } from "react-router-dom";

//  Material Ui Components
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import MainImage from "../../shared/ImageMain";
import { arrowDrop } from "../../../SVGs";
import AuthBtns from "./AuthBtns";

export const RenderLanguageMenu = ({ t, i18n, changeLanguage, anchorEl, isLanguageMenuOpen, handleMenuClose }) => {
    const menuId = 'language-menu';

    return (
        <Menu
            sx={{
                mt: '40px',
                zIndex: 10000,
                mr: '30px',
                minHeight: '300px',
                '& .MuiPaper-root': {
                    minWidth: '120px',
                    boxShadow: '0px 4px 10px 5px rgb(182 185 212 / 12%)',
                },
            }}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isLanguageMenuOpen}
            onClose={handleMenuClose}
        >
            <Typography variant='subtitle2' px={2} color='text.secondary'>
                {t('navbar.lang')}
            </Typography>

            <MenuItem
                onClick={() => changeLanguage("ar")}
                mx={0}
                color='primary'
                sx={{
                    pointerEvents: i18n.language === 'ar' && 'none',
                    borderBottom: '.6px solid currentColor',
                    borderColor: 'common.border',
                }}
            >
                <Typography
                    sx={{ textDecoration: 'none', width: '100%', height: '100%' }}
                    variant='subtitle2'
                    color='primary'
                >
                    العربية
                </Typography>
            </MenuItem>

            <MenuItem
                onClick={() => changeLanguage("en")}
                mx={0}
                color='primary'
                sx={{ pointerEvents: i18n.language === 'en' && 'none' }}
            >
                <Typography
                    sx={{ textDecoration: 'none', width: '100%', height: '100%' }}
                    variant='subtitle2'
                    color='primary'
                >
                    English
                </Typography>
            </MenuItem>
        </Menu>
    )
};


const DesktopHeader = ({ navItems, t, i18n, handleLanguageMenuOpen }) => {

    return (
        <>
            <Typography
                component={Link}
                sx={{ display: { xs: 'none', md: 'block' } }}
                href='/'
            >
                <MainImage
                    name='Logo.png'
                    alt='link company logo'
                    width={190}
                    height={72}
                    sx={{
                        width: { md: '150px', xl: '190px' },
                        height: { md: '50px', xl: '72px' },
                        objectFit: 'contain'
                    }}
                />
            </Typography>

            <Grid
                container
                spacing={4}
                sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
                justifyContent='flex-end'
            >
                <Grid item sm={4} md={6}>
                    {navItems?.length > 0 && navItems.map(item => {
                        return (
                            <Typography
                                variant='h6'
                                color='text.primary'
                                px={2}
                                sx={{ textDecoration: 'none' }}
                                component={Link}
                                to={item.url}
                                key={item.id}
                            >
                                {item.text}
                            </Typography>
                        );
                    })}
                </Grid>


                <Grid item xs={3} sm={2.7} md={4} lg={4} display='flex' alignItems='center'>
                    {/* Auth Buttons */}
                    <AuthBtns t={t} />

                    {/* Language Dropdown */}
                    <Typography
                        variant='h6'
                        color='text.primary'
                        px={2}
                        sx={{ textDecoration: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.25rem' }}
                        onClick={handleLanguageMenuOpen}
                    >
                        {i18n.language === 'en' ? 'EN' : 'AR'}
                        {arrowDrop}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default DesktopHeader