import {  useState } from "react";
import ProductCard from "../components/ProductCard";
import { data } from "../data";
const ProductCatalog = () => {
    const [obj,setobj]=useState(data);
    const [page,setpage]=useState(1);
    const [searchTerm,setsearchTerm]=useState("");
    const HandlePrev=()=>{if(page>1)setpage(page-1)};
    const HandleNext=()=>{if(page<obj.length/6)setpage(page+1)};
    const HandleSearch=(e)=>{setpage(1);setsearchTerm(e.target.value)};

    return ( <>
    <div className="bg">
        <div className="productlist2">
            <div className="searchbar">search <input className="searchfield" type="text" onChange={HandleSearch} /></div>
            <div className="productlist">
            {obj.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(page*6-6,page*6).map((item,index)=><ProductCard key={index} product={item}/>)}
            </div>
            <div className="pagination"><button className="pagebutton" onClick={HandlePrev}>Prev</button> <button className="pagebutton" onClick={HandleNext}>Next</button></div>
        </div>
        <div className="productdescription">
            
        </div>
   
    


    </div>
    </> );
}
 
export default ProductCatalog;