import { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import MainImage from "../shared/ImageMain";
import { calendarIcon, heartFilledIcon, heartOutlinedIcon, sharedIcon } from "../../SVGs";
import ShareSocialIcons from "../shared/ShareSocialIcons";
import { useNews } from "../../store";

const NewsCard = ({ newsData, handleToggleAddToFav }) => {
    const { title, urlToImage, publishedDate, categoryName, id } = newsData;

    const [showSharedIcons, setShowShareIcons] = useState(false);

    // Get Fav News from Store
    const favNews = useNews((state) => state?.news?.wishlist);

    // 
    const isFav = favNews.map(news => +news.id)?.includes(+id);

    return (
        <Box className='news-card'>
            <Box className='news-card_img'>
                <MainImage imgUrl={urlToImage} alt={title} height="100%" />
            </Box>

            <Box className='news-card_content' py={{ xs: 1.5, md: 2, lg: 2.5 }} px={{ xs: 1, md: 1.5 }}>
                <Link to={`/news/${id}`} className='news-card_title fw-semibold'>
                    {title}
                </Link>

                {/* Calendar Icon */}
                <Box color='primary.main' my={{ xs: .75, md: 1.25 }} display='flex' alignItems='center' gap={{ xs: .75, md: 1 }}>
                    {calendarIcon}
                    <span className="date">
                        {publishedDate}
                    </span>
                </Box>

                {/*  */}
                <Box className='news-card_footer' display='flex' justifyContent='space-between' alignItems='center' my={{ xs: 1.5, md: 3 }}>
                    <Box className='category-name' textAlign='center'>
                        {categoryName}
                    </Box>
                    <Box color='primary.main' display='flex' alignItems='center' gap={{ xs: .75, md: 1 }}>
                        {/* Add to Fav */}
                        <span className="cursor-pointer" onClick={() => handleToggleAddToFav(newsData)}>
                            {isFav ? heartFilledIcon : heartOutlinedIcon}
                        </span>

                        {/* Share Icon */}
                        <span className="cursor-pointer" onClick={() => setShowShareIcons(!showSharedIcons)}> {sharedIcon}</span>
                        {<ShareSocialIcons show={showSharedIcons} />}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NewsCard;