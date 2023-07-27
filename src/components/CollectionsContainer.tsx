import React from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import { CollectionItem } from '../interfaces/global';
import CollectionItemCard from './CollectionItemCard';

export default function CollectionsContainer({collections,onPageChange}:{collections:{items:CollectionItem[],countPage:number, currentPage:number},onPageChange:(page:number)=>void}){
    const handlePageChange:(event: React.ChangeEvent<unknown>, page: number) => void=(_,page)=>onPageChange(page);

    return <><Grid container spacing={"28px"}>
        {collections.items.map(item=><Grid item xs={12} sm={6} md={4} key={item.objectNumber}>
            <CollectionItemCard item={item}/>  
        </Grid>)}
    </Grid>
    {collections.countPage>1?<Pagination sx={{marginTop:"29px", width:"max-content",marginLeft:"auto"}}  size='large' onChange={handlePageChange} count={collections.countPage} variant="outlined" color="primary"/>:null}
    </>
}