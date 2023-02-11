import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import  TextField  from '@mui/material/TextField';
const Navbar = ({params}) => {
  const SearchBarComponent = () => {
    
    return(
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">
           <IconButton
          aria-label="toggle password visibility"
        //   onClick={handleClickShowPassword}
        //   onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          <SearchIcon/>
        </IconButton>
        </InputAdornment>}
      label="Password"
      />
      {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
    </FormControl>
    )
};
const navigate = useNavigate()
    return (
        <Box sx={{ width: '100%', height:"100%",  flexDirection:'column',  backgroundColor:'white', display:'flex'  }}>
        <Box sx={{  display:'flex', flex:2, width:"100%", margin:'auto', flexDirection:'column', alignItems:'center'}}>
        <div style={{width:"100%", height:40, display:'flex' }} >
        <nav style={{width:'75%', flexDirection:'row',  margin:'auto', maxHeight:113, alignItems:'center', display:'flex' }} >
        <div style={{display:'flex', flex:2   }}> <p>Llámanos: 271 254 6984</p></div>
        <div style={{display:'flex', flex:8, justifyContent:'flex-end',  flexDirection:'row', alignItems:'center'}}> 
          <PersonOutlineOutlinedIcon/> <p>Iniciar sesión</p>
        </div>

        </nav>
        </div>
         <nav style={{width:'75%', height:113, alignItems:'center', display:'flex' }} >
         <div style={{flex:2}}>
          <img  style={{width:150, height:50}} src={require('./assets/logo.jpeg')} />

          </div>
          <Tabs value={0} style={{flex:6}} onChange={() =>{}} aria-label="basic tabs example">
            <Tab label="Inicio" onClick={() => navigate('/home')} />
            <Tab label="Tienda"  />
            <Tab label="Acerca de nosotros" onClick={() => navigate('/about')} />
          </Tabs>
          <SearchBarComponent style={{flex:3}} />
         </nav>
        </Box>
        <Box sx={{  display:'flex', flexDirection:'column', overflow:'scroll', width:'100%', flex:8 }}>
          <Outlet style={{  display:'flex'}} ></Outlet>
        </Box> 
      </Box>
    )
}

export default Navbar;
