import React from 'react'

import Pagination from '@mui/material/Pagination'
import { Stack} from '@mui/material'
import {  ThemeProvider,createTheme} from '@mui/material/styles'



const DarkTheme = createTheme({
    palette: {
        mode:'dark',
    },
  });
  

function CustomPagination(props) {
    //props destructing
    const{setPage,numOfPage=12}=props;
    const OnchangeHandel=(page)=>{
     setPage(page);
     window.scroll(0,0);
    }

  return (
    <div>
      
      <Stack spacing={2} sx={{alignItems:"center",mt:3, padding:"10px 0px"}} >
      <ThemeProvider theme={DarkTheme}>
      <Pagination  color="primary" onChange={(e)=>OnchangeHandel(e.target.textContent)}
      count={numOfPage}  />
         </ThemeProvider>
    </Stack>

    </div>
  )
}

export default CustomPagination