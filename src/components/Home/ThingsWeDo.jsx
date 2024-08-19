import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import MainImage from "../shared/ImageMain"
import { arrowRight } from "../../SVGs"

const CARDS_DATA = [
    {
        id: 1,
        text: 'Crafty Mind',
        image: '/assets/images/service-1.png'
    },
    {
        id: 2,
        text: 'Services',
        image: '/assets/images/service-2.png'
    },

    {
        id: 3,
        text: 'Envision',
        image: '/assets/images/service-3.png'
    },
    {
        id: 4,
        text: 'Dynamics 365',
        image: '/assets/images/service-4.png'
    },
    {
        id: 5,
        text: 'Transformation',
        image: '/assets/images/service-5.png'
    },

];


const ThingsWeDo = () => {
    return (
        <Box className="things-wed-do_container" py={{ xs: 8, md: 10, lg: 14 }}>
            {/* header background */}
            <h3 className="header-background fw-bold">
                Things
                We Do
            </h3>

            {/* We deliver content */}
            <Box className='we-deliver_container' display='flex' alignItems='center'>
                {/* Cards */}
                <Box className='we-deliver_cards' display='flex' flexWrap='wrap'>
                    {CARDS_DATA.map(card => (
                        <Box className='we-deliver_card' key={card.id}>
                            <MainImage imgUrl={card.image} alt={card.text} width='100%' height='100%' />
                            <h6 className="we-deliver_card-text fw-bold">
                                {card.text}
                            </h6>
                            {/* Read More */}
                            <Box component={Link} to='/' className='read-more_btn cursor-pointer' display='flex' alignItems='center' gap={1} color='common.white'>
                                {arrowRight}
                                <span className="text">
                                    Read more
                                </span>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box className='we-deliver_content' py={{ xs: 6, lg: 8 }} px={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                    <Box component='h5' className="we-deliver_title fw-bold" mb={{ xs: 3, md: 5 }}>
                        We Deliver <br />
                        Digital Productivity
                    </Box>
                    <p className="we-deliver_text">
                        We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers and partners.
                    </p>

                </Box>


            </Box>

        </Box>
    )
}

export default ThingsWeDo