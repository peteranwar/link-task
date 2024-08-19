import { Link } from "react-router-dom"

//  Material Ui Components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import MainImage from "../../shared/ImageMain"
import { Facebook_Icon, Instagram_Icon, Twitter_Icon } from "../../../SVGs"

const Footer = () => {

  const FOOTER_LINKS = [
    {
      id: 1,
      category: 'Company',
      links: [
        {
          id: 1,
          text: 'About',
          url: '/'
        },
        {
          id: 2,
          text: 'Careers',
          url: '/'
        },
        {
          id: 1,
          text: 'Mobile',
          url: '/'
        },

      ]
    },
    {
      id: 2,
      category: 'Contact',
      links: [
        {
          id: 4,
          text: 'Help/FAQ',
          url: '/'
        },
        {
          id: 5,
          text: 'Press',
          url: '/'
        },
        {
          id: 6,
          text: 'Affilates',
          url: '/'
        },

      ]
    },
    {
      id: 3,
      category: 'Media',
      links: [
        {
          id: 7,
          text: 'News',
          url: '/'
        },
        {
          id: 8,
          text: 'Photo',
          url: '/'
        },
        {
          id: 9,
          text: 'Video',
          url: '/'
        },

      ]
    }
  ];


  const SOCIAL_links = [
    {
      id: 1,
      icon: Facebook_Icon,
      url: '',
    },
    {
      id: 2,
      icon: Instagram_Icon,
      url: '',
    },
    {
      id: 3,
      icon: Twitter_Icon,
      url: '',
    },
  ];


  return (
    <Box component='footer' sx={{ overflow: 'hidden' }}>
      <Container>
        <Grid container spacing={{ xs: 1.5, md: 5 }}>
          <Grid item xs={9} md={4} lg={3}>
            <MainImage
              name='Logo.png'
              alt='link company logo'
              width={190}
              height={72}
              sx={{
                width: { xs: '180px', lg: '157px' },
                height: { xs: '54px', lg: '60px' },
                objectFit: 'contain',
                mb: 3
              }}
            />
            <Typography variant="subtitle2" color='text.light'>
              We make technology produce productive, adaptable and sustainable business experiences.
            </Typography>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={8} lg={6}>
            <Grid container spacing={{ xs: 1, md: 5 }}>
              {FOOTER_LINKS?.map(el => (
                <Grid item xs={4} key={el.id}>
                  <Typography color='text.primary' variant="subtitle1" fontWeight={700} mb={{ xs: 1, md: 2 }}>
                    {el.category}
                  </Typography>
                  <List>
                    {el.links.map(link => (
                      <ListItem sx={{ px: 0 }} key={link.id}>
                        <Typography
                          variant='h5'
                          fontWeight='500'
                          color='text.light'
                          sx={{ textDecoration: 'none' }}
                          component={Link}
                          to={link.url}
                        >
                          {link.text}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
              {/* <Grid item xs={4}>
                <Typography color='text.primary' variant="subtitle1" fontWeight={700} mb={{ xs: 1, md: 2 }}>
                  Company
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <Typography
                      variant='h5'
                      fontWeight='500'
                      color='text.light'
                      sx={{ textDecoration: 'none' }}
                      component={Link}
                      to='/'
                    >
                      About
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ px: 0 }}>
                    <Typography
                      variant='h5'
                      fontWeight='500'
                      color='text.light'
                      sx={{ textDecoration: 'none' }}
                      component={Link}
                      to='/'
                    >
                      Careers
                    </Typography>
                  </ListItem>

                  <ListItem sx={{ px: 0 }}>
                    <Typography
                      variant='h5'
                      fontWeight='500'
                      color='text.light'
                      sx={{ textDecoration: 'none' }}
                      component={Link}
                      to='/'
                    >
                      
                    </Typography>
                  </ListItem>

                </List>

              </Grid> */}
            </Grid>
          </Grid>



          {/* Footer Social */}
          <Grid item xs={12} md={8} lg={3}>
            <Box display='flex' mb={{ xs: 2, md: 3 }} gap={{ xs: '1rem', md: '1.5rem' }}>
              {
                SOCIAL_links.map(social => <Box key={social.id} component='a' href={social.url} target="_blank"
                  display='flex' alignItems='center' justifyContent='center' sx={{
                    borderRadius: '50%',
                    bgcolor: 'common.white',
                    color: 'text.primary',
                    width: { xs: '38px', md: '41px' },
                    height: { xs: '38px', md: '41px' },
                    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.10)',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'common.white'
                    }
                  }}>
                  {social.icon}
                </Box>)
              }
            </Box>

            <Typography variant="h4" color='text.light' fontWeight={500} mb={{ xs: 1.25, md: 2 }}>
              Discover our app
            </Typography>

            <Box display='flex' alignItems='center' gap={1}>
              <MainImage name='Google Play.png' alt='Google Play'
                sx={{
                  width: '107px',
                  height: '35px',
                  objectFit: 'contain',
                }}
              />

              <MainImage name='Play Store.png' alt='Play Store'
                sx={{
                  width: '107px',
                  height: '35px',
                  objectFit: 'contain',
                }}
              />
            </Box>

          </Grid>


          {/* Footer Bottom */}
          <Grid item xs={12} mb={{xs:3, md:4.75}}>
            <Typography textAlign='center' variant="body1" color='text.light'>
              All rights reserved@Linkdevelopment.com
            </Typography>
          </Grid>
        </Grid>

      </Container>
    </Box>
  )
}

export default Footer