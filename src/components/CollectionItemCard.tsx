import React from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { CollectionItem } from '../interfaces/global';
import { Link } from 'react-router-dom';

const CardHeaderTitle=({title}:{title:string})=><Box sx={{
    padding: "4px 8px 4px 8px",
    borderRadius: "0px 8px 0px 8px",
    fontSize:"14px",
    textAlign:"right",
    background:"#1D1D1D80",
    color:"#0FEFFD"
}}>{title}</Box>

export default function CollectionItemCard({item}:{item:CollectionItem}){
    return  <Link to={`/collections/${item.objectNumber}`} style={{textDecoration:"none"}}><Card sx={{
        maxWidth:"450px",
        height:"364px", 
        display:"flex",
        flexDirection:"column",
        overflow:"hidden", 
        justifyContent:"space-between", 
        zIndex:100, 
        background:item.hasImage?`url(${item.webImage.url})`:"black",
        backgroundSize:"100% 100%",
        boxShadow: "0px 16px 16px 4px #0000001F"
        }}>
        <CardHeader title={<CardHeaderTitle title={item.principalOrFirstMaker}/>} 
        sx={{ 
            height: "24px",
            padding:0,
            marginLeft:"auto",
            width: "max-content"}}
            disableTypography
         />
    <CardContent sx={{zIndex:100}}>
      <Typography gutterBottom variant="h5" component="div"color={"#C4C4C4"} fontSize={"32px"} lineHeight={"40px"}>{item.title}</Typography>
    </CardContent>
  </Card></Link>;
}
