import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import MainButton from './MainButton';


const ErrorComponent = () => {
    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{
            minHeight: '85vh'
        }}>

            <Typography variant='h3' color='error' mb={{ xs: 3, md: 4 }}>Something went wrong..</Typography>
            <MainButton onClick={() => window.location.href = '/'} sx={{ px: 5 }} primary size='large'>
                Go to Home
            </MainButton>
        </Box>
    )
}

export default ErrorComponent