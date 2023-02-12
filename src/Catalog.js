import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

const Catalog = ({isMobile}) => {
    const arr = ['Plancha', 'Refrigerador', 'Batería', 'Estufa', 'Licuadora',
    'Mecedora', 'Mesa', 'Recipiente', 'Ropero', 'Television','Ventilador', 'Sillas']
    const CardComponent = ({item}) => {
        return (
            <Card sx={{ width:250, height:370, margin:isMobile ? 0 : 2 }}>
            <CardMedia  image={require(`./assets/${item}.jpeg`)} sx={{width:240, height:290, margin:'auto'}} >
            </CardMedia>
            <CardContent sx={{height:70, width:250, display:'flex', justifyContent:'center' }}>
            <Typography variant="body2" color="text.secondary">
                {item}
        </Typography>
            </CardContent>
        </Card> )
        
    };


        return(
            <div style={{display:'flex',  flexDirection:'row', justifyContent:'center', flex:1, flexWrap:'wrap'}} >
                {arr.map(ar => {
                    return <CardComponent item={ar}/>
                })}
                
            </div>
        )
};
export default Catalog;