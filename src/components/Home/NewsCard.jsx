import { Box } from "@mui/material";
import MainImage from "../shared/ImageMain";
import { calendarIcon, heartOutlinedIcon, sharedIcon } from "../../SVGs";

const NewsCard = ({ newsData }) => {

    console.log('newsCategoriesnewsCategories newsData', newsData);


    return (
        <Box className='news-card'>
            <Box className='news-card_img'>
                <MainImage imgUrl={newsData.urlToImage} alt={newsData.title} height="100%" />

            </Box>

            <Box className='news-card_content' py={{ xs: 1.5, md: 2, lg: 2.5 }} px={{ xs: 1, md: 1.5 }}>
                <h6 className='news-card_title fw-semibold '>
                    {newsData.title}
                </h6>

                {/* Calendar Icon */}
                <Box color='primary.main' my={{ xs: .75, md: 1.25 }} display='flex' alignItems='center' gap={{ xs: .75, md: 1 }}>
                    {calendarIcon}
                    <span className="date">
                        Wed 12 Aug 2022
                    </span>
                </Box>

                {/*  */}
                <Box display='flex' justifyContent='space-between' alignItems='center' my={{ xs: 1.5, md: 3 }}>
                    <Box className='category-name' textAlign='center'>

                        {newsData.categoryName}
                    </Box>
                    <Box color='primary.main' display='flex' alignItems='center' gap={{ xs: .75, md: 1 }}>
                        <span className="cursor-pointer">{heartOutlinedIcon}</span>
                        <span className="cursor-pointer"> {sharedIcon}</span>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default NewsCard