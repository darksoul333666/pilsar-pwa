import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';

const HomeScreen = () => {
    const arr = ['', '', '', '', '','', '', '', '', '','', '', '', '', '',]

const Catalogs = () => {
    const Card = () => {
        return (
            <Paper elevation={3} />
               )
        //     <Card sx={{ minWidth: 275 }}>
        //     {/* <CardContent>
        //     </CardContent>
        //     <CardActions>
        //     </CardActions> */}
        // </Card> )
        
    }
        return(
            <div style={{flex:1, display:'flex', flexDirection:'row', flexWrap:'wrap' }} >
                {arr.map(ar => {
                    return <Card/>
                })}
                
            </div>
        )
};

return <Catalogs/>
}

export default HomeScreen;
