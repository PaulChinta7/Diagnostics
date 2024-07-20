import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
    const product=props.product;
    const id=props.ind+1;
    const [quantity,setquantity]=useState(1);
    const [total,settotal]=useState(product.price);
    const Handleinc=()=>{ if(quantity<5){setquantity(quantity+1);settotal(total+product.price)}}
    const Handledec=()=>{ if(quantity>1){setquantity(quantity-1);settotal(total-product.price)}}


    const dispatch=useDispatch();
    const Handledelete=()=>{ 
        dispatch({type:"DELETE_FROM_CART",payload:product});
    }
   
    return ( <>
      <div className="cartlistitem">
                        <span className="cartitemid">{id}</span>
                        <span className="cartitemname">{product.name}</span>
                        <span className="cartitemfield">{product.no}</span>
                        <span className="cartitemquant"> <button className="decbutton" onClick={Handledec}>-</button>{quantity}<button className="incbutton" onClick={Handleinc}>+</button></span>
                        <span className="cartitemfield">${product.price}</span>
                        <span className="cartitemfield"> ${total.toFixed(2)}</span>
                        <span className="cartitemfield"><button className="cartitemdeletebutton" onClick={Handledelete}>delete</button></span>
                    </div>
    </> );
}
 
export default CartItem;
