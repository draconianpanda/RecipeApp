import { AppBar, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
// import logo from "../images/logo2.png";
import '../Components/Style.css';
import { NavLink } from 'react-router-dom';
import TableViewSharpIcon from '@mui/icons-material/TableViewSharp';
import PlaylistAddSharpIcon from '@mui/icons-material/PlaylistAddSharp';

const Header = () => {
  return (
    <div style={{marginBottom:'90px'}}>
     <AppBar className='nav'>
        <Toolbar>
        {/* <img height='80px' src={logo} alt="recipe-logo" />&nbsp;&nbsp; */}
        <Typography variant='h4' style={{fontFamily:'fantasy',color:'black'}}>Kiran's Recipes</Typography>&nbsp;&nbsp;

        <Button ><NavLink to={'/'} style={{textDecoration:'none',fontFamily:'sans-serif',color:'black',fontSize:'20px'}}>
        <Tooltip title='View Cusines'>
                    <IconButton>
                    <TableViewSharpIcon style={{fontSize:'40px',color:'black'}}/>
                    </IconButton>
                  </Tooltip>
          </NavLink></Button>
        <Button><NavLink to={'/addcusine'} style={{textDecoration:'none',fontFamily:'sans-serif',color:'black',fontSize:'20px'}}>
        <Tooltip title='Add Cusine'>
                      <IconButton>
                      <PlaylistAddSharpIcon style={{fontSize:'40px',color:'black'}}/>
                      </IconButton>
                    </Tooltip> 
          </NavLink></Button>
        </Toolbar>
     </AppBar>
    </div>
  )
}

export default Header