import {  useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDescription from "../components/ProductDescription";
import {useSelector} from 'react-redux';
import { data } from "../data";
const ProductCatalog = () => {
    const [obj,setobj]=useState(data);
    const [page,setpage]=useState(1);
    const [searchTerm,setsearchTerm]=useState("");
    const displayobj=useSelector((state)=>state.product);
    const cart=useSelector((state)=>state.cart);
    const HandlePrev=()=>{if(page>1)setpage(page-1)};
    const HandleNext=()=>{if(page<obj.length/6)setpage(page+1)};
    const HandleSearch=(e)=>{setpage(1);setsearchTerm(e.target.value)};
    
    return ( <>
    <div className="bg">
        <div className="productlist2">
            <div className="searchbar"><input className="searchfield" type="text" onChange={HandleSearch} placeholder="search"/></div>
            <div className="productlist" >
            {obj.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(page*6-6,page*6).map((item,index)=><ProductCard key={index} product={item}/>)}
            </div>
            <div className="pagination"><button className="pagebutton" onClick={HandlePrev}>Prev</button> <button className="pagebutton" onClick={HandleNext}>Next</button></div>
        </div>
        
        <div className="productdescription">
            <ProductDescription product={displayobj}/>
        </div>
   
    


    </div>
    </> );
}
 
export default ProductCatalog;