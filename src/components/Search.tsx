import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Button, OutlinedInput, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
const style={ borderRadius:"40px", width:"150px", fontSize:"18px"
}
export default function Search(){
    const [search, setSearch]=useState("");
    const navigate= useNavigate();
    const handleSearch:FormEventHandler=(e)=>{
        e.preventDefault();
        navigate(`/search?search=${search}`);
    }
    const handleSearchChange:ChangeEventHandler<HTMLInputElement>=(e)=>{
        setSearch(e.target.value);
    }
    return <form onSubmit={handleSearch}>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
            <OutlinedInput size="small" sx={{width:"calc(220px + 6vw)",maxWidth:"460px", borderRadius:"40px"}} value={search} onChange={handleSearchChange} placeholder="Please type in your search"/>
            <Button sx={style} size="large" variant="contained" type="submit">Search</Button>
        </Stack>
    </form>
}