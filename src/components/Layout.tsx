import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";
import theme from "../theme";
import { Outlet } from "react-router-dom";
import Header from "./Header";



export default function Layout(){
    const mobileSize =useMediaQuery('(min-width:700px)');
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{maxWidth:"1440px", margin:"auto"}} >
            <Header showSearch={mobileSize}/>
            <Outlet/>
        </Box>
  </ThemeProvider>;
}