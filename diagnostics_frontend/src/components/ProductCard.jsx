import { useState } from "react"
import Button from "./Button";
import { Link } from "react-router-dom";
// name,
// no,
// description,
// summary,
// type,
// price
// location
// reportsin


const ProductCard = () => {
    const [Name,setName]=useState("Covid RTPCR");
    const [Id,setId]=useState("X3EP0");
    const [Description,setDescription]=useState("A CBC is a common blood test that evaluates the overall health and function of blood cells.");
    const [Summary,setSummary]=useState("Provides information on red blood cells, white blood cells, and platelets.");
    const [Type,setType]=useState("Blood test");
    const [Price,setPrice]=useState("$50");
    const [Location,setLocation]=useState("laboratory");
    const [ReportsIn,setReportsIn]=useState("1-2 days");

    return ( <>
    <div className="productcard">
        <div className="productcard-data">
        <div className="productcard-line">
        <span>{Name}</span>
        <span>{Id}</span>
        </div>
        <hr/>
        <span>{Description}</span>
      
        <div className="productcard-line">
        <span>{Type}</span>
        <span>{Location}</span>
        <span>{ReportsIn}</span>
        <span>{Price}</span>
        </div>
        <div className="productcard-line"> 
        <Link to="/products">more...</Link>
        <Button name={"Add"} />
        </div>


        </div>
        {/* <span>TestNo.</span>
        <span>Test description</span>
        <span>Test Type</span>
        <span>Test price</span>
        <span>Test location</span>
        <span>Reports in</span>
        <span>Summary</span> */}
    </div>
    </> );
}
 
export default ProductCard;