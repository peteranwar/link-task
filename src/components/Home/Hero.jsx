
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainButton from '../shared/MainButton';
import { heroShapeIcon, topSlider, videoPlay } from '../../SVGs';
import { Typography } from '@mui/material';
import { useState, useLayoutEffect, useEffect } from 'react';
import MainImage from '../shared/ImageMain';

// import image1 from '../../../public/assets/images/Image-1.png'

const Hero = ({ bannerData }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const images = [
    '/assets/images/image-1.png',
    '/assets/images/image-2.png',
    '/assets/images/image-3.png',
  ]

  const colors = bannerData?.map(banner => banner.colorCode);

  const bannerDataUpdated = bannerData?.map((banner, index) => ({
    ...banner,
    imgUrl: images[index]
  }))
  console.log('bannerDatabannerData bannerDataUpdated', bannerDataUpdated)

  return (
    <Box display='flex' alignItems='center' className='hero-container'>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Swiper
              effect={'fade'}
              // autoplay={{
              //   delay: 3500,
              //   disableOnInteraction: false,
              // }}
              speed={250}
              modules={[ EffectFade, Pagination]} //Autoplay,
              className="mySwiper"
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '" style="background: #' + colors?.[index] + '" >' + '</span>';
                }
              }}
              onSlideChange={(props) => {
                setActiveIndex(props.activeIndex)
              }}
            >
              {bannerDataUpdated?.map(banner => (
                <>
                  <SwiperSlide key={banner.id}>
                    <Box className="hero-slider_item">
                      <Container>
                        <Grid container spacing={{ xs: 2, md: 4 }}>
                          <Grid item xs={12} md={8} lg={7} sx={{ color: `#${banner.colorCode}`, paddingTop: '0 !important' }}>
                            <Box className='slider-content'>

                              <h6 className="cate-name">
                                {banner.category}
                              </h6>
                              <h1 className="hero-title text-color fw-bold">
                                {banner?.title}
                                {/* Shape */}
                                <Box className='hero-shape' sx={{ color: `#${banner.colorCode}` }}>
                                  {heroShapeIcon}
                                </Box>
                              </h1>
                              <p className="hero-desc text-light">
                                {banner?.brief}
                              </p>
                              <Box display='flex' gap={{ xs: 2, md: 3.75 }}>
                                <MainButton aria-label="Find out" isLink linkTo={banner.itemUrl} target="_blank" sx={{ px: 5 }} primary>
                                  Find out more
                                </MainButton>
                                <Box className='play-demo cursor-pointer' display='flex' alignItems='center' gap={{ xs: 1, md: 2 }}>
                                  <Box display='flex' alignItems='center' justifyContent='center' className="icon">
                                    {videoPlay}
                                  </Box>
                                  <Typography color='text.light'>
                                    Play Demo
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>

                          </Grid>

                          {/* Slider Image */}
                          <Grid item xs={12}  md={8} lg={5} sx={{ pt: 0 }}>
                            <div className="slider-img">
                              <MainImage imgUrl={banner.imgUrl} alt={banner.title}
                                width={'100%'}
                                height={'100%'} />

                            </div>
                            {/* <img src={banner.imgUrl} alt="" width={200}height={200} /> */}

                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>

      {/* Slider Shape */}
      <div className="top-slider_shape" style={{ color: `#${colors?.[activeIndex]}` }}>
        {topSlider}
      </div>
    </Box>
  )
}

export default Hero