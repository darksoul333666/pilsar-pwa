import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Footer from './Footer';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Navbar = ({params}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
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
    </FormControl>
    )
};
const navigate = useNavigate()
    return (
        <Box sx={{ width: '100%', height:"100%",  flexDirection:'column', overflow:'scroll',  display:'flex'  }}>
        <Box sx={{  display:'flex', flex:2, width:"100%", margin:'auto', backgroundColor:'white',
         flexDirection:'column', alignItems:'center'}}>
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
          <Tabs value={value} style={{flex:6}} onChange={handleChange} aria-label="basic tabs example">

          <Tab label="Inicio" onClick={() => navigate('/home')}{...a11yProps(0)} />
            <Tab label="Tienda" onClick={() => navigate('/store')}{...a11yProps(1)} />
            <Tab label="Acerca de nosotros" onClick={() => navigate('/about')} {...a11yProps(2)} />
          </Tabs>
          <SearchBarComponent style={{flex:3}} />
         </nav>
        </Box>
        <Box sx={{  display:'flex', flexDirection:'column', overflow:'scroll', width:'100%', flex:8 }}>
          <Outlet style={{  display:'flex'}} ></Outlet>
          <Footer/>
        </Box> 
      </Box>
    )
}

export default Navbar;
