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
            <div className="searchbar"><input className="searchfield" type="text" onChange={HandleSearch} placeholder="search"/></div>
            <div className="productlist">
            {obj.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())).slice(page*6-6,page*6).map((item,index)=><ProductCard key={index} product={item}/>)}
            </div>
            <div className="pagination"><button className="pagebutton" onClick={HandlePrev}>Prev</button> <button className="pagebutton" onClick={HandleNext}>Next</button></div>
        </div>
        
        <div className="productdescription">
            <div className="prodtitle">
                <span className="prodtitle1">Covid-19 PCR Test</span>
                <span className="prodtitle2">COVIDPCR001</span>
            </div>
            <div className="prodsummary">
                <p>The COVIDPCR001 test is a Polymerase Chain Reaction (PCR) test designed to detect COVID-19 virus RNA in the patient's sample. PCR tests are highly sensitive and accurate for diagnosing current infection with the virus.</p>
            </div>
            <div className="prodprocedure">
              
                    <p>A trained healthcare professional will gently insert a swab into your nose/mouth to collect respiratory secretions.</p>
                        <p>The swabbing process is brief and generally painless, though it may cause slight discomfort.</p>
                        <p>After collection, the sample is securely stored and transported to the laboratory for analysis.</p>
             
            </div>
            <div className="proddetails">
                <div className="proddetails1">
                    <span>Type <br /> <span className="data">Diagnostic</span></span>
                    <span>Location <br /><span className="data">Lab/Home</span></span>
                    <span>Reports in <br /><span className="data">3-4 days</span></span>
                    <span>Price<br /><span className="data">$99.99</span></span>
                </div>
                <div className="proddetails2">
                    <button className="addbutton2">Add to Cart</button>
                </div>

            </div>
            
        </div>
   
    


    </div>
    </> );
}
 
export default ProductCatalog;