import { useState } from "react";

const ProductDescription = (props) => {
    const name=props.product.name;
    const no=props.product.no;
    const type=props.product.type;
    const location=props.product.location;
    const reportsin=props.product.reportsin;
    const price=props.product.price;
    // console.log(name);
    return ( <>
    <div className="prodtitle">
                <span className="prodtitle1">{name}</span>
                <span className="prodtitle2">{no}</span>
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
                    <span>Type <br /> <span className="data">{type}</span></span>
                    <span>Location <br /><span className="data">{location}</span></span>
                    <span>Reports in <br /><span className="data">{reportsin}</span></span>
                    <span>Price<br /><span className="data">${price}</span></span>
                </div>
                <div className="proddetails2">
                    <button className="addbutton2">Add to Cart</button>
                </div>

            </div>
    </> );
}
 
export default ProductDescription;