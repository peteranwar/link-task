import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const NoDataFound = ({ message }) => {
    return (
        <Box display='flex' justifyContent='center' my={4}>
            <Typography variant='h2' color='error'>
                {message ?? 'No Data Found!'}
            </Typography>
        </Box>
    )
}

export default NoDataFound