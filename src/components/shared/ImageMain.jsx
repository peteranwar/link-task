import Box from "@mui/material/Box";



const MainImage = (props) => {
    const { imgUrl, name, alt, sx, ...rest } = props;
    if (!name && !imgUrl) {
        return null;
    }
    return <Box component='img' src={imgUrl ?? `/assets/images/${name}`} loading="lazy"
        decoding="async" alt={alt ?? 'image'} sx={sx} {...rest} />
};

export default MainImage;
