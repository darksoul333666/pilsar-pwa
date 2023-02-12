import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import './Footer.css';
import Typography from '@mui/material/Typography';

 const Footer = () => {
    const products = [
        {name:'Productos en liquidación'},
        {name:'Nuevos productos'},
        {name:'Lo más vendido'}
    ];
    const grupoPilsar = [
        {name:'Políticas de privacidad'},
        {name:'Acerca de Nosotros'},
        {name:'Términos y condiciones'},
        {name:'Tiendas'}

    ];
    const account = [
        {name:' Información personal'},
        {name:'Devoluciones de mercancía'},
        {name:'Pedidos'},
        {name:'Créditos'},
        {name:'Direcciones'},
        {name:'TieVales de descuentondas'}
    ]
    const renderItem = (name) => {
        return(
            <Typography className='item' >{name}</Typography>
        )
    }
  return (
    <Box sx={{display:'flex', flex:1,  backgroundColor:'white', flexDirection:'column'}} >
             <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', width:'80%', margin:'auto', height:140}} >
             <p style={{width:300}} >Infórmese de nuestras ofertas y noticias
                 más recientes...</p>
            </Box>
            <Box sx={{display:'flex',width:'80%',  flexDirection:'row', margin:'auto', height:300}} >
            <div style={{flex:1}} >
            <h3>PRODUCTOS</h3>
            <List>
                {products.map(item => renderItem(item.name))}
            </List>
            </div>
            <div style={{flex:1}} >
            <h3>GRUPO PILSAR</h3>
            {grupoPilsar.map(item => renderItem(item.name))}
            </div>
            <div style={{flex:1}} >
            <h3>TU CUENTA</h3>
            {account.map(item => renderItem(item.name))}
            </div>
            <div style={{flex:1}} >
            <h3>INFORMACIÓN DE LA TIENDA</h3>
             <Typography className='item' >
             Av. Josefa Ortíz de Domínguez, 
             SN, Trapiche Viejo, Municipio de 
             Amatlán de los Reyes, Ver
             </Typography>
             <Typography className='item' >Mexico</Typography>
            <Typography className='item'>Grupo Pilsar</Typography>
            <Typography className='item'>Llámanos: 271 254 6984</Typography>
            <Typography className='item'>
            Envíanos un correo electrónico: ventas@grupopilsar.com.mx
             </Typography>
            </div>
            
            </Box>
    </Box>
  )
}
export default Footer;
