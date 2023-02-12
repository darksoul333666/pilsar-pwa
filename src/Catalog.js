import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';

const Catalog = () => {
    const arr = ['', '', '', '', '','', '', '', '', '','', '']
    const CardComponent = () => {
        return (
            <Card sx={{ width:250, height:370, margin:2 }}>
            <CardMedia sx={{height:300, width:250}} >
            </CardMedia>
            <CardContent sx={{height:70, width:250}}>
            </CardContent>
        </Card> )
        
    };


        return(
            <div style={{display:'flex',  flexDirection:'row', justifyContent:'center', flex:1, flexWrap:'wrap'}} >
                {arr.map(ar => {
                    return <CardComponent/>
                })}
                
            </div>
        )
};
export default Catalog;