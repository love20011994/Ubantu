import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ImageAvatars from './Avatar';
import SearchIcon from '@mui/icons-material/Search';
// import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import  { useState,useEffect } from "react";



export default function ButtonAppBar({logoutfun,kush}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));
      const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

      const matches = useMediaQuery('(min-width:1024px)');
      const matches1 = useMediaQuery('(min-width:886px)');
      const matches2 = useMediaQuery('(min-width:786px)');
      const matches3 = useMediaQuery('(min-width:644px)');
      const matches4 = useMediaQuery('(min-width:544px)');
      const matches5 = useMediaQuery('(min-width:444px)');
      const matches6= useMediaQuery('(min-width:344px)');



//onClick={()=>logoutfun(false)}
const luv =()=>{
  setIsSidebarOpen(!isSidebarOpen)
  kush(isSidebarOpen)

}

// useEffect(()=>{

// },[])
  return (
    <Box  >
      <AppBar position="fixed" >
        <Toolbar sx={{ ml:3 }}>
            <ImageAvatars sx={{ml:3}}/>
        <Typography variant="h6" component="div" sx={{ ml:3}}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml:5 }}
            onClick={luv}
          >
            <MenuIcon />
          </IconButton>
         
          {/* <Button color="inherit">Login</Button> */}
         <Box sx={{display:"flex",justifyContent:"space-evenly",width:"18.75rem",marginLeft:`${matches?'58%':matches1?"55%":matches2?"55%":matches3?"50%":matches4?"45%":matches5?"42%":matches6?"40%":"37%"}`,backgroundColor:"",alignItems:"center"}}>
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box>
          <NotificationsOutlinedIcon/>

          </Box>
          <Box>
          <AccountCircleIcon onClick={()=>logoutfun(true)} />
         
          </Box>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}