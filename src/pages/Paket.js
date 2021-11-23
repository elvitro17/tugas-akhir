import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Popup from './Popup.js';
import { useState } from 'react';
import  './Paket.css';

 
  export default function Movie() {{
    const [isOpen, setIsOpen] = useState(false);
   

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

  
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
   
    <List component="nav" >
    <ListItemText primary="Paket 1" />
      <ListItemButton   
            
        onClick={togglePopup}
      >{isOpen && <Popup content={<>
          
          <p>Lokasi = Gedung A</p>
          <p>Harga = Rp 300.000</p>
          <p>Tanggal = 2 Desember 2021</p>
          <p>Waktu = 10.00 - 12.00 WIB</p>
        </>}
        handleClose={togglePopup}/>}
        
      </ListItemButton>
      <ListItemText primary="Paket 2" />
      <ListItemButton
        
        onClick={togglePopup}
        >{isOpen && <Popup content={<>
            
            <p>Lokasi = Gedung B</p>
            <p>Harga = Rp 300.000</p>
            <p>Tanggal = 3 Desember 2021</p>
          <p>Waktu = 13.00 - 15.00 WIB</p>
          </>}
          handleClose={togglePopup}/>}
      
        
      </ListItemButton>
      <ListItemText primary="Paket 3" />
      <ListItemButton
       
        onClick={togglePopup}
        >{isOpen && <Popup content={<>
            
            <p>Lokasi = Gedung C</p>
            <p>Harga = Rp 300.000</p>
            <p>Tanggal = 6 Desember 2021</p>
          <p>Waktu = 10.00 - 12.00 WIB</p>
          </>}
          handleClose={togglePopup}/>}
        
      </ListItemButton>
      
    </List>
  </Box>
  );
        }}