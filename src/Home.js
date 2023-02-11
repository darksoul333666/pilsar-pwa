import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Catalog from './Catalog';
import Box from '@mui/material/Box';
const HomeScreen = () => {

const CarouselComponent = () => {
    return(
        <Carousel show={1} slide responsive={true}  >
        <img src={require('./assets/c1.jpeg')} />
        <img src={require('./assets/c2.jpeg')} />
        <img src={require('./assets/c3.jpeg')} />
        <img src={require('./assets/c4.jpeg')} />
        <img src={require('./assets/c5.jpeg')} />

        </Carousel>
    )
};

return (
    <Box sx={{flex:1, display:'flex',  width:"80%", margin:'auto', flexDirection:'column'}} >
        <CarouselComponent/>
        <Catalog style={{display:'flex'}} />
    </Box>    
)
}

export default HomeScreen;
