import {  useState } from "react";
import ProductCard from "../components/ProductCard";
import { data } from "../data";
const ProductCatalog = () => {
    // data for products



    const [searchTerm,setsearchTerm]=useState("");
    const [div_num,setdivnum]=(data.length/5).toFixed(0);
    const [page,setpage]=useState(1);
    const arr=[...Array(Number(div_num)).keys()];
   

        const HandleSearchFilter =(e)=>{setsearchTerm(e.target.value);}
        const HandlePage=(num)=>{setpage(num+1);}
        const HandlePrev=()=>{if(page-1>0)setpage(page-1);}
        const HandleNext=()=>{if(page<div_num)setpage(page+1);}

   

    return ( <>
    <div className="bg productsContainer">
        <div className="searchPaginationContainer">
        <div>Search: <input type="text" onChange={HandleSearchFilter}/></div>
        <div className="PaginationContainer">
            <button onClick={HandlePrev}>Prev</button> 
            {arr.map((item)=><button key={item} onClick={()=>{HandlePage(item)}}>{item}</button> )} 
            <button onClick={HandleNext}>Next</button>
        </div>
        </div>
        <div className="productsList">
        {data.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(page*5-5,page*5).map((item)=><ProductCard key={item.no} obj={item}/>)}
        </div>
    
    </div>
    </> );
}
 
export default ProductCatalog;