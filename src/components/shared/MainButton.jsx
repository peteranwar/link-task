import { Box } from "@mui/material"
import { Link } from "react-router-dom"



const MainButton = ({ children, primary, isLink, linkTo, restClasses, loading, size, ...props }) => {

    return (
        <>
            {isLink ? <Box component={Link} to={linkTo} className={`main-btn ${size} ${primary ? 'primary-btn' : 'secondary-btn'}`}  {...props} >
                {children}
            </Box>
                :
                <Box component='button' px={4} pb={.5} className={`main-btn ${size}  ${primary ? 'primary-btn' : 'secondary-btn'}`} {...props}>
                    {children}
                </Box>
            }
        </>
    )
}

export default MainButton
