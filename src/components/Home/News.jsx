import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box"
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import NewsApiEndpoints from "../../services/news.api";
import NewsCard from "./NewsCard";

const News = () => {
    const [activeCategory, setActiveCategory] = useState('ALL');
    const [newsToShow, setNewsToShow] = useState([])


    //  Get News Categories
    const { data: newsCategories } = useQuery(
        ['newsCategories'],
        () => NewsApiEndpoints.getNewsCategories(),
        {
            select: data => {
                return data.newsCategory;
            },
        }
    );

    //  Get News Listing
    const { data: newsListing } = useQuery(
        ['newsListing'],
        () => NewsApiEndpoints.getNewsListing(),
        {
            enabled: newsCategories?.length > 0, // Only call news listing when gets news categories first
            select: data => {
                const updatedNews = data.News?.filter(news => news.showOnHomepage === 'yes').map(dt => ({
                    ...dt,
                    categoryName: newsCategories.find(cate => +cate.id === +dt.categoryID)?.name
                }));
                return updatedNews
            },
            onSuccess: (data) => {
                
            }
        }
    );

    // Get News depend on Category Id
    useEffect(() => {
        if (activeCategory !== 'ALL') {
            const newsList = newsListing.filter(news => +news?.categoryID === +activeCategory)
            setNewsToShow(newsList)
        }
    }, [activeCategory])

    console.log('newsCategoriesnewsCategories newsCategories', newsCategories);
    console.log('newsCategoriesnewsCategories newsToShow', newsToShow);
    // console.log('newsCategoriesnewsCategories activeCategory', activeCategory);


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
                                setNewsToShow(newsListing)
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

                {/* News Cards */}
                <Grid container spacing={{ xs: 2, md: 3, lg: 5 }}>
                    {
                        newsToShow?.map(news => (
                            <Grid key={news.id} item xs={12} md={6} lg={4}>
                                <NewsCard newsData={news} />
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>

        </Box>
    )
}

export default News