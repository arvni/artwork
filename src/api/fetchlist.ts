import axios from "axios";
import { CollectionItem } from "../interfaces/global";
const apiKey="2esrTh6M";
export async function fetchList(search="",page=1):Promise<{items:Array<CollectionItem>,total:number, countPage:number,currentPage:number}>{
    let query=new URLSearchParams();
    query.append("key",process.env.API_KEY?.toString()??apiKey)
    query.append("ps","9");
    query.append("p",page.toString());
    if(search)
        query.append("q",search);
    const {data}=await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?${query.toString()}`);
    console.log(data);
    return {items:data.artObjects,total:data.count,countPage:Math.floor(data.count/9)+1, currentPage:page};
}
