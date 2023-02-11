import React from 'react'
import Box from '@mui/material/Box';

 const AboutScreen = () => {
  return (
    <Box sx={{flex:1, display:'flex',  width:"80%", margin:'auto', flexDirection:'column'}} >
      <Box sx={{flex:2, width:"100%", backgroundColor:'red'  }} >

      </Box>
      <Box sx={{flex:8, width:"100%",  }} >
        <div style={{flex:1, width:"95%", height:"100%",  backgroundColor:'blue', margin:'auto'}} >
        <img style={{width:"100%"}} src={require('./assets/about.jpeg')}/>
        <img style={{width:"100%"}} src={require('./assets/mision.jpeg')}/>
        </div>
      </Box>
    </Box>    
  )
}
export default AboutScreen