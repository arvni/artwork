import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../components/ProTip';
import { useLocation, useNavigate } from 'react-router-dom';
import { CollectionItem } from '../interfaces/global';
import { fetchList } from '../api/fetchlist';
import CollectionsContainer from '../components/CollectionsContainer';
import { Backdrop, CircularProgress } from '@mui/material';

export default function Home() {
    const [loading,setLoading]=React.useState<boolean>(false);
    const [collections,setCollections]=React.useState<{countPage:number,items:CollectionItem[],currentPage:number,total:number}>({total:0,countPage:1,items:[],currentPage:1});
    const loc=useLocation();
    React.useEffect(()=>{
        let queryString=new URLSearchParams(loc.search.substring(1));
        handleSearch("",Number.parseInt(queryString.get("page")??"1"));
    },[loc]);

    const handleSearch=(search="",p=1)=>{
        setLoading(true);
        fetchList(search,p).then(setCollections).finally(()=>setLoading(false));
    }
    const navigate=useNavigate();
    const handlePageChange:(p:number)=>void=(p)=>{
        navigate(`/search?page=${p}`)
    }
  return (
    <>
        <Typography variant="h4" component="h1" gutterBottom color={"#C4C4C4"}>Art Work</Typography>
        <CollectionsContainer collections={collections} onPageChange={handlePageChange}/>
        <Backdrop open={loading}>
            <CircularProgress color="primary"/>
        </Backdrop>
    </>
    )
};
