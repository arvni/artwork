import React from 'react';
import { Typography, Box } from '@mui/material';
const Footer=()=>{
    return <Box sx={{height:"48px",backgroundColor:"#262626", display:"flex", alignContent:"center", justifyContent:"center", marginTop:"32px"}}>
            <Typography fontSize={"16px"} sx={{margin:"auto"}} textAlign={"center"} color={"#636366"}>
                Art API
            </Typography>  
    </Box>
}

export default Footer;