import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import Catalog from './Catalog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useScreenSize from './useScreenSize';

 const StoreScreen = () => {
  const {height, width} = useScreenSize();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(width < 1000)
  },[width])

  const MenuComponent = () => {
    const categories = [
      {name:'Mobiliario'},{name:'Electrodomésticos'},{name:'Sartenes y ollas'},{name:'Baterías'},
      {name:'Aluminio'},{name:'Línea blanca'},{name:'COLCHONES'},
    ]
    return(
      <Box sx={{display:'flex', flex:1,  flexDirection:'column'}} >
        <Box style={{height:100}}  >
        <div style={{ flex:2, top:0 , flexDirection:'column'}} >
          <p style={{flex:3}} >  Inicio / TIENDA</p>
          <h2 style={{flex:7, marginLeft:20}} > TIENDA</h2>
        </div>
        </Box>
        <Box style={{flex:1}} >
        <List style={{flex:1, width:"90%", marginLeft:"10%"}} >
        {categories.map(category => {
          return(
            <ListItem disablePadding>
          <ListItemButton>
          <ListItemText primary={category.name} />
        </ListItemButton>
      </ListItem>
          )
        })}
        
      </List>
        </Box>
      </Box>
      
    )
  };

  const SelectComponent = () => {
    return(
      <FormControl sx={{ m: 1, minWidth: 80, justifySelf:'center', width: 300 }}>
    <InputLabel id="demo-simple-select-autowidth-label">Relevancia</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      // value={age}
      // onChange={handleChange}
      autoWidth
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Twenty</MenuItem>
      <MenuItem value={21}>Twenty one</MenuItem>
      <MenuItem value={22}>Twenty one and a half</MenuItem>
    </Select>
  </FormControl>
    )
  };  


  return (
     <Box sx={{flex:1, display:'flex',  width:isMobile ? "95%": "80%", margin:'auto', flexDirection:isMobile ? 'column': 'row'}} >
      <Box sx={{flex:2, display:'flex' }} >
        <MenuComponent/>
      </Box>
      <Box sx={{flex:6, display:'flex', width:"100%", flexDirection:'column' }} >
      <Card style={{ display:'flex', backgroundColor: !isMobile ?'white': "#F7F7F6", 
      flexDirection:'column', height:220, marginTop:60}} variant="outlined">
      <h2 style={{flex:1, marginLeft:20}} > TIENDA</h2>
      <p style={{flex:4, width:'75%', alignSelf:'center', textAlign:'center' }} > Lo que necesitas para el hogar.
       Encuentra una gran variedad de productos de calidad y al mejor precio.</p>
      </Card>
      <Box sx={{display:'flex',   }} >
         <div style={{flex:6 , display:isMobile? 'none': 'flex' }} > <p>Hay 136 productos.</p></div>
         <div style={{flex:4,  display:'flex', flexDirection:isMobile ?'column' : 'row',   alignItems:!isMobile ? 'center' : null  }} >
          <p>Filtrar por:</p>
          <div style={{flexDirection:'row',  display:'flex'}} >
          <SelectComponent style={{ display:'flex', justifyContent:'center',  flexDirection:'row'}} />
          </div>
         </div>
      </Box>
      <Box sx={{flex:7, overflow:'scroll' }}> <Catalog isMobile={isMobile} /> </Box>
      </Box>
    </Box>    
  )
}
export default StoreScreen;
