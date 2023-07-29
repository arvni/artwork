import { Backdrop, CircularProgress, ListItemText, List, ListItem, Typography, Box, Link, Divider } from '@mui/material';
import React, { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { fetchOne } from '../service/api';
import { CollectionInterface } from '../interfaces/global';
const Subtitle=({title}:{title:string})=><Typography 
                                            fontSize="16px" 
                                            fontWeight= "500" 
                                            lineHeight="24px" 
                                            letterSpacing="0em"
                                            textAlign="left"
                                            color="#C4C4C4"
                                            >{title}</Typography>
const Title=({title}:{title:string})=><Typography 
                                            fontSize="24px"
                                            fontWeight="500"
                                            lineHeight= "32px"
                                            letterSpacing= "0em"
                                            textAlign="left"
                                            >{title}</Typography>                                            
const Collection=()=>{
    const [collection, setCollection]=React.useState<CollectionInterface>();
    const [loading, setLoading]=React.useState(false);
    const {id}=useParams<{id:string}>();
    useEffect(()=>{
        fetchData();
    },[id]);
    const fetchData=()=>{
        setLoading(true)
        id?fetchOne(id).then((res)=>{
            setCollection(res.artObject);
            console.log(res.artObject)
        }).finally(()=>setLoading(false)):null;
    }
    const navigate=useNavigate();

    const handleBack=()=>navigate(-1)

    return <>
        <Link   onClick={handleBack} 
                color="primary" 
                sx={{
                    textDecoration:"none",
                    cursor:"pointer",
                    display:"flex",
                    alignItems:"center",
                    alignContent:"center", 
                    marginY:"32px",
                    lineHeight:"24px",
                    fontSize:"18px"}}
                    ><KeyboardArrowLeftIcon/>Back to the List</Link>
        {loading || !collection ? <Backdrop open={loading}>
        <CircularProgress/>
    </Backdrop>: 
    <>
        <Box sx={{marginBottom:"32px",
            position:"relative","& img":{
            borderRadius:"8px",
            zIndex:10
        }}}>
            <Box sx={{position:"absolute", zIndex:100,marginLeft:"33px",marginBottom:"32px",bottom:0}}>
                    <Typography variant='h1'
                                fontSize="56px"
                                fontWeight="500"
                                lineHeight="64px"
                                letterSpacing= "0em"
                                textAlign="left"
                        >{collection.label.title}</Typography>
            </Box>
            <img src={collection?.webImage?.url??""} width={"100%"} />
        </Box>
        <List >
            <ListItem>
                <ListItemText>
                    <Subtitle title='Title'/>
                    <Title title={collection.label.title}/>
                    </ListItemText>
            </ListItem>
                    <Divider/>
            <ListItem>
                <ListItemText>
                    <Subtitle title="Artist"/>
                    <Title title={collection.label.makerLine}/>
                    </ListItemText>
            </ListItem>
                    <Divider/>
            <ListItem>
                <ListItemText>
                    <Subtitle title="Object Type"/>
                    <Title title={collection.label.notes}/>
                    </ListItemText>
            </ListItem>
                    <Divider/>
            <ListItem>
                <ListItemText>
                    <Subtitle title="Measurements"/>
                    <Title title={collection.subTitle}/>
                    </ListItemText>
            </ListItem>
                    <Divider/>
            <ListItem>
                <ListItemText>
                    <Subtitle title="Description"/>
                    <Title title={collection.label.description}/>
                    </ListItemText>
            </ListItem>
                    <Divider/>
        </List>
    </>}
    </>;

}
export default Collection;