import { useState } from "react"
import { Link } from "react-router-dom";
// name,
// no,
// description,
// summary,
// type,
// price
// location
// reportsin


const ProductCard = (prop) => {

    const [Name,setName]=useState(prop.obj.name);
    const [Id,setId]=useState(prop.obj.no);
    const [Description,setDescription]=useState(prop.obj.description);
    const [Summary,setSummary]=useState(prop.obj.summary);
    const [Type,setType]=useState(prop.obj.type);
    const [Price,setPrice]=useState(prop.obj.price);
    const [Location,setLocation]=useState(prop.obj.location);
    const [ReportsIn,setReportsIn]=useState(prop.obj.reportsin);

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
        <span>${Price}</span>
        </div>
        <div className="productcard-line"> 
        <Link to="/products">more...</Link>
        <button className="button"> Add</button>
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