import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';








export default function SimpleBottomNavigation() {

  const [value, setValue] = React.useState(0);
  const history=useNavigate()

   
    useEffect(() => {
        
     if(value===0)
     {
      history("/")
     }
     else if(value===1)
     {
      history("/movies")
     }
     else if(value===2)
     {
      history("/tv")
     }
     else if(value===3)
     {
      history("/search")
     }
     
    }, [value, history])
    

  return (
    <Box  >
      <BottomNavigation
        showLabels
         sx={{ width:"100%",  color:'white', backgroundColor:' #39445a', position:"fixed", bottom:'0'}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction sx={{ color:'white',}} style={{fontWeight:"bold"}}  label="Trending" icon={<WhatshotIcon/>} />
        <BottomNavigationAction sx={{ color:'white',}} style={{fontWeight:"bold"}}  label="Movies"   icon={<MovieCreationIcon/>} />
        <BottomNavigationAction  sx={{ color:'white',}} style={{fontWeight:"bold"}} label="TV Series" icon={<LiveTvIcon/>} />
        <BottomNavigationAction  sx={{ color:'white',}} style={{fontWeight:"bold"}} label="Search" icon={<SearchIcon/>} />
      </BottomNavigation>
    </Box>
  );
}
