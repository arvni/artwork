import React from "react";
import { Stack, Typography } from "@mui/material";

export default function Logo(){

    return <Stack direction={"row"} spacing={1} alignItems={"center"}>
    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2654_231)">
            <path d="M52.4614 38.2086L32.3181 3.26422C31.1617 1.25044 28.9941 0 26.6717 0C25.5347 0 24.4098 0.302916 23.4203 0.876032C22.4091 1.46005 21.5999 2.28883 21.035 3.27634L19.1553 6.53328L31.0541 27.1752H18.6183L9.41085 43.1485C8.48914 44.7515 6.43767 45.3004 4.8398 44.3747C3.24314 43.4538 2.69277 41.3964 3.61448 39.7958L19.1432 12.8569L17.3252 9.70299L0.871126 38.2086C-0.923909 41.3237 0.145371 45.3247 3.25644 47.1228C4.27976 47.7165 5.39863 47.9952 6.50178 47.9952C8.75646 47.9952 10.9507 46.8283 12.1554 44.737L20.4484 30.3473H36.542L23.7784 8.20174C22.8567 6.60235 23.407 4.54616 25.0037 3.62408C25.5129 3.32965 26.0887 3.17334 26.6717 3.17334C27.868 3.17334 28.9796 3.81674 29.576 4.8515L49.7169 39.7958C50.6422 41.3964 50.0906 43.4538 48.4916 44.3747C47.9835 44.6704 47.4053 44.8254 46.8235 44.8254C45.6285 44.8254 44.5156 44.1845 43.9205 43.1485L40.4079 37.0526H20.2536L18.4247 40.2248H38.5777L41.1784 44.737C42.3384 46.7496 44.4999 48 46.8235 48C47.963 48 49.0867 47.6947 50.0773 47.1228C53.1896 45.3247 54.2577 41.3237 52.4614 38.2086Z" fill="url(#paint0_linear_2654_231)"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_2654_231" x1="1.35418" y1="-9.31902e-07" x2="47.2126" y2="52.5298" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0FEFFD"/>
                <stop offset="0.723958" stopColor="#FF00F5"/>
                <stop offset="1" stopColor="#0FEFFD" stopOpacity="0"/>
            </linearGradient>
            <clipPath id="clip0_2654_231">
                <rect width="53.3333" height="48" fill="white"/>
            </clipPath>
        </defs>
    </svg>
    <Typography fontFamily={"Roboto"} fontWeight={500} variant="h1" fontSize={"32px"} color={"#AEAEB2"}>Art API</Typography>
    </Stack>;    
}