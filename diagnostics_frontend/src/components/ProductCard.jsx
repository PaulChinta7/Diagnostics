import {Link} from 'react-router-dom'
const ProductCard = (props) => {
    const data=props;
    return ( <>
    
    <div className="productcard"> 
        <div className="productcardone">
        <p> {data.product.name}</p>
        <p>{data.product.no}</p>
        </div>
        <div className="productcardtwo">
        <p>{data.product.description}</p><span><Link>more..</Link></span>    
        </div>
        <div className="productcardthree">
        <p>{data.product.type}</p>
        <p>{data.product.location}</p>
        <p>${data.product.price}</p>
        <button className="addbutton">Add</button>
        </div>

        </div>
    </> );
}
 
export default ProductCard;