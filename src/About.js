import React from 'react'
import Box from '@mui/material/Box';

 const AboutScreen = () => {
  return (
    <Box sx={{flex:1, display:'flex',  width:"80%", margin:'auto', flexDirection:'column'}} >
      <Box sx={{flex:2, width:"100%" }} >

      </Box>
      <Box sx={{flex:8, width:"100%",flexDirection:'column' }} >
        <div style={{ flex:2, top:0 , flexDirection:'column'}} >
          <p style={{flex:3}} >  Inicio / Acerca de Nosotros</p>
          <h2 style={{flex:7}} > Acerca de Nosotros</h2>
        </div>
        <div style={{flex:8, backgroundColor:'white', flexDirection:'column'}} >
        <div style={{flex:1, width:"95%", margin:'auto', margin:'2.5%'  }} >
        <img style={{width:"100%"}} src={require('./assets/about.jpeg')}/>
        <img style={{width:"100%"}} src={require('./assets/mision.jpeg')}/>
        </div>
        </div>
        
      </Box>
    </Box>    
  )
}
export default AboutScreen