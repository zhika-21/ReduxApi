import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({setPage, page}) {
  const handleChange=(page)=>{
    setPage(page)
    window.scroll(0,0)

  }
  return (
    <Stack spacing={1}>
      <Pagination
      onChange={(e)=>handleChange(e.target.value)}
       style={{
        display: "flex",
        justifyContent: "center",
        flow: "right"
      }} 
      count={page} color="primary" />
    </Stack>
  );
}