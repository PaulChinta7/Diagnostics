import { useDispatch } from "react-redux";
const CartItem = (props) => {
    const product=props.product;
    const id=props.ind+1;
    const dispatch=useDispatch();
    const Handledelete=()=>{ 
        dispatch({type:"DELETE_FROM_CART",payload:product});
    }
    return ( <>
      <div className="cartlistitem">
                        <span className="cartitemid">{id}</span>
                        <span className="cartitemname">{product.name}</span>
                        <span className="cartitemfield">{product.no}</span>
                        <span className="cartitemquant"> <button className="decbutton">-</button> 1 <button className="incbutton">+</button></span>
                        <span className="cartitemfield">${product.price}</span>
                        <span className="cartitemfield"> $109.99</span>
                        <span className="cartitemfield"><button className="cartitemdeletebutton" onClick={Handledelete}>delete</button></span>
                    </div>
    </> );
}
 
export default CartItem;
