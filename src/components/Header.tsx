import React from "react";
import { Box, Stack } from "@mui/material";

import Logo from "./Logo";
import Search from "./Search";

export default function Header({showSearch}:{showSearch:boolean}){
    return <Box border={1} padding={"32px"} borderRadius={100} borderColor={"#CA35F7"}>
        <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
            <Logo/>
            {showSearch?<Search />:null}
        </Stack>
    </Box>
}