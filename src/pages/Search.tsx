import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchList } from '../service/api';
import { CollectionItem } from '../interfaces/global';
import { Backdrop, CircularProgress } from '@mui/material';
import CollectionsContainer from '../components/CollectionsContainer';

export default function Search() {
    const [defaulteValues,setDefaultValues]=React.useState({search:"",page:1});
    const [loading,setLoading]=React.useState<boolean>(false);
    const loc=useLocation();
    const navigate=useNavigate();
    const [collections,setCollections]=React.useState<{countPage:number,items:CollectionItem[],currentPage:number,total:number}>({total:0,countPage:1,items:[],currentPage:1});
    React.useEffect(()=>{
        let queryString=new URLSearchParams(loc.search.substring(1));
        let query={...defaulteValues};
        queryString.forEach((value,key)=>{
            setDefaultValues(prevValue=>({...prevValue,[key]:value}));
            query={...query,[key]:value}
        });
        handleSearch(query.search,query.page);
    },[loc]);

    const handleSearch=(search="",page=1)=>{
        setLoading(true);
        fetchList(search,page).then(setCollections).finally(()=>setLoading(false));
    }
    const handlePageChange:(page:number)=>void=(page)=>{
        navigate(`/search?search=${defaulteValues.search}&page=${page}`)
    }
  return (
    <>
        <Typography variant="h4" component="h1" gutterBottom color={"#C4C4C4"}>Found {collections.total} results for: <Typography component={"span"} variant="h3" color={"white"}>{defaulteValues.search}</Typography></Typography>
        <CollectionsContainer collections={collections} onPageChange={handlePageChange}/>
        <Backdrop open={loading}>
            <CircularProgress color="primary"/>
        </Backdrop>
    </>
  );
}
