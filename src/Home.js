import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Catalog from './Catalog';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import ImageGallery from 'react-image-gallery';

const HomeScreen = () => {

const CarouselComponent = () => {
    return(

         <ImageGallery items={[{
            original: require('./assets/c1.jpeg'),
          },
          {
            original: require('./assets/c2.jpeg'),
          },
          {
            original: require('./assets/c3.jpeg'),
          },
          {
            original: require('./assets/c4.jpeg'),
          },
          {
            original: require('./assets/c5.jpeg'),
          }
        ]} 
          showThumbnails={false}
          showPlayButton={false}
          showFullscreenButton={false}
          />


        // </Carousel>
    )
};

return (
    <Box sx={{flex:1, display:'flex',  width:"80%", margin:'auto', flexDirection:'column'}} >
        <CarouselComponent />
        <Box sx={{flex:1, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }} >
        <h3>PRODUCTOS DESTACADOS</h3>
        </Box>
        <Catalog style={{display:'flex'}} />
    </Box>    
)
}

export default HomeScreen;
