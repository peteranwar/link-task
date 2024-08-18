import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const AuthBtns = ({ t, color }) => {
    return (
        <>
            <Button
                variant='outlined'
                sx={{ border: 'none', color: color, fontFamily: 'GoogleSansMed', '&:hover': { border: 'none', bgcolor: 'transparent' } }}
                component={Link}
                to='/login'
            >
                {t('navbar.login')}
            </Button>
            <Button
                variant='outlined'
                component={Link}
                to='/sing-up'
                sx={{ color: color, borderColor: 'currentcolor' }}
            >
                {t('navbar.signUp')}
            </Button>
        </>
    )
}

export default AuthBtns