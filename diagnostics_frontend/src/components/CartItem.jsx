import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
    const product=props.product;
    const id=props.ind+1;
    const total=(product.price*product.quantity).toFixed(2);
    
    
    const dispatch=useDispatch();
    const Handleinc=()=>{ 
        if(product.quantity<5)
            dispatch({type:"INC_PRODUCT_QUANTITY",payload:product});
        }
    const Handledec=()=>{ 
         if(product.quantity>1) 
            dispatch({type:"DEC_PRODUCT_QUANTITY",payload:product});
        }

    const Handledelete=()=>{ 
        dispatch({type:"DELETE_FROM_CART",payload:product});
    }
   
    return ( <>
      <div className="cartlistitem">
                        <span className="cartitemid">{id}</span>
                        <span className="cartitemname">{product.name}</span>
                        <span className="cartitemfield">{product.no}</span>
                        <span className="cartitemquant"> <button className="decbutton" onClick={Handledec}>-</button>{product.quantity}<button className="incbutton" onClick={Handleinc}>+</button></span>
                        <span className="cartitemfield">${product.price}</span>
                        <span className="cartitemfield"> ${total}</span>
                        <span className="cartitemfield"><button className="cartitemdeletebutton" onClick={Handledelete}>delete</button></span>
                    </div>
    </> );
}
 
export default CartItem;
