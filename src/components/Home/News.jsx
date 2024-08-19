import { useEffect, useState } from "react";

import { useQuery } from "react-query";

// Material Ui Components
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"


import NewsApiEndpoints from "../../services/news.api";
import NewsCard from "./NewsCard";
import NoDataFound from "./NoDataFound";
import MainButton from "../shared/MainButton";
import { useNews } from "../../store";

const News = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [newsToShow, setNewsToShow] = useState([])

    const favNews = useNews((state) => state.news.wishlist);
    const toggleAddNewToWishlist = useNews((state) => state.toggleAddNewToWishlist);

    //  Get News Categories
    const { data: newsCategories, isLoading: isNewsCategoriesLoading } = useQuery(
        ['newsCategories'],
        () => NewsApiEndpoints.getNewsCategories(),
        {
            select: data => {
                return data.newsCategory;
            },
        }
    );

    //  Get News Listing
    const { data: newsListing, isLoading: isNewsListingLoading } = useQuery(
        ['newsListing'],
        () => NewsApiEndpoints.getNewsListing(),
        {
            enabled: newsCategories?.length > 0, // Only call news listing when gets news categories first
            select: data => {
                // Filter news depend on showOnHomepage flag
                const updatedNews = data.News?.filter(news => news.showOnHomepage === 'yes').map(dt => ({
                    ...dt,
                    categoryName: newsCategories.find(cate => +cate.id === +dt.categoryID)?.name // add Category name to the list
                }));
                return updatedNews
            },
            onSuccess: (data) => {
                setNewsToShow(data.slice(0, 6))
            }
        }
    );

    // Get News depend on Category Id
    useEffect(() => {
        if (activeCategory !== 'ALL') {
            const newsList = newsListing.filter(news => +news?.categoryID === +activeCategory).slice(0, 6)
            setNewsToShow(newsList)
        }
    }, [activeCategory])

    console.log('newsCategoriesnewsCategories newsToShow', newsToShow);
    console.log('newsCategoriesnewsCategories newsListing', newsListing);
    // console.log('newsCategoriesnewsCategories activeCategory', activeCategory);

    function handleToggleAddToFav(newObj) {

        toggleAddNewToWishlist(newObj)
    }

    return (
        <Box className='news-container' py={{ xs: 4, md: 6 }}>
            <Box textAlign='center'>
                <h6 className="news-subtitle">
                    Media
                </h6>
                <h5 className="news-title fw-bold">
                    Top News
                </h5>
            </Box>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        {/* News Categories */}
                        <Box className="news-categories_container" my={{ xs: 2, md: 4 }} display='flex' flexWrap='wrap' justifyContent='center'
                            gap={{ xs: 2, md: 5 }}>
                            <button onClick={() => {
                                setActiveCategory('ALL');
                                setNewsToShow(newsListing.slice(0, 6))
                            }}
                                className={`category-btn cursor-pointer ${activeCategory === 'ALL' ? 'active' : ''}`}>
                                All news
                            </button>
                            {newsCategories?.map((cate, index) => (
                                <button onClick={() => setActiveCategory(cate.id)} key={cate.id}
                                    className={`category-btn cursor-pointer ${activeCategory === cate.id ? 'active' : ''}`}>
                                    {cate.name}
                                </button>
                            ))}
                        </Box>
                    </Grid>
                </Grid>

                {/* In Case NEWS loading  -  we can and another check in case CATEGORIES loading as well and create separate loader */}
                {isNewsListingLoading && <Box display='flex' justifyContent='center'>
                    <CircularProgress color="secondary" />
                </Box>}
                {/* News Cards */}
                {newsToShow.length > 0 && <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
                    {
                        newsToShow?.map(news => (
                            <Grid key={news.id} item xs={12} md={6} lg={4}>
                                <NewsCard newsData={{ ...news, isFav: favNews.includes(news.id) }} handleToggleAddToFav={handleToggleAddToFav} />
                            </Grid>
                        ))
                    }
                    <Grid item xs={12} display='flex' justifyContent='center' my={4}>
                        <MainButton isLink linkTo='/news' sx={{ px: 5 }} primary size='large'>
                            View All News
                        </MainButton>
                    </Grid>
                </Grid>}

                {/* In Case No Data Found */}
                {newsToShow.length === 0 && !isNewsListingLoading && !isNewsCategoriesLoading && <NoDataFound />}
            </Container>

        </Box>
    )
}

export default News