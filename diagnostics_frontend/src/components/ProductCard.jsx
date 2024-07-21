import { useDispatch } from "react-redux";
const ProductCard = (props) => {
    const data=props;
    const dispatch=useDispatch();
    const HandleMore=()=>{dispatch({type:"SET_DESCRIPTION",payload:data.product})};
    const HandleAddToCart=()=>{dispatch({type:"ADD_TO_CART",payload:
        {name:data.product.name,no:data.product.no,quantity:1,price:data.product.price}
    })
    HandleMore();
}
    return ( <>
    
    <div className="productcard"> 
        <div className="productcardone">
        <p> {data.product.name}</p>
        <p>{data.product.no}</p>
        </div>
        <div className="productcardtwo">
        <p>{data.product.description}</p>
        <span onClick={HandleMore}>More...</span>    
        </div>
        <div className="productcardthree">
        <p>{data.product.type}</p>
        <p>{data.product.location}</p>
        <p>${data.product.price}</p>
        <button className="addbutton" onClick={HandleAddToCart}>Add</button>
        </div>

        </div>
    </> );
}
 
export default ProductCard;