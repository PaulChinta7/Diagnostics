import {  useState } from "react";
import ProductCard from "../components/ProductCard";
import { data } from "../data";
const ProductCatalog = () => {
    const [obj,setobj]=useState(data);
    

    return ( <>
    <div className="bg">
        <div className="productlist">
            {obj.map((item,index)=><ProductCard key={index} product={item}/>)}

        </div>
        <div className="productdescription">
            
        </div>
   
    


    </div>
    </> );
}
 
export default ProductCatalog;