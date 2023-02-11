import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Navbar = ({params}) => {

    return (
        <Box sx={{ width: '100%', height:"100px", border:"1px",  backgroundColor:'red',
        borderBottomColor:'red',   alignItems:'center', display:'flex'  }}>
        <Box sx={{  display:'flex', flexDirection:'row',
        justifyItems:'center', alignItems:'center'}}>

            <img style={{width:150, height:50}} src={require('./assets/logo.jpeg')} />
            {/* <div>
            <a>INICIO</a>
            <a>TIENDA</a>
            <a>ACERCA DE NOSOTROS</a>
            </div> */}
          <Tabs value={0} onChange={() =>{}} aria-label="basic tabs example">
            <Tab label="Inicio"  />
            <Tab label="Tienda"  />
            <Tab label="Acerca de nosotros" />
          </Tabs>
        </Box>
      </Box>
    )
}

export default Navbar;
