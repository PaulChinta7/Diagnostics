import CartItem from "../components/CartItem";
import {useSelector} from 'react-redux';
import { useEffect, useState } from "react";
const Cart = () => {
    const cartitems=useSelector((state)=>state.cart);
    const [total,settotal]=useState(0);
    
    return ( <>
    <div className="bg">
        <div className="cartlistcontainer">
            <div className="cartlist">
                <div className="cartlistheading">
                    <span className="cartlistback">Add more tests</span>
                    <div className="cartlisttitles">
                        <span className="cartitemid">No.</span>
                        <span className="cartitemname">Item</span>
                        <span className="cartitemfield">code</span>
                        <span className="cartitemquant">quantity</span>
                        <span className="cartitemfield">price</span>
                        <span className="cartitemfield">total</span>
                        <span className="cartitemfield"></span>
                    </div>
                </div>
                <div className="cartlistitems">
                   
                    {cartitems.map((item,index)=> <CartItem key={index} ind={index}product={item}/>)}

                </div>
            </div>
        </div>
        <div className="checkoutcontainer">
            <div className="checkout">
                <span className="summarydetailstitle">Summary</span>
                <div className="summarydetails"><span>promo code</span> <span><input type="text" /></span></div>
                <div className="summarydetails"><span>discount</span><span>$0.00</span></div>
                <div className="summarydetails"><span>subtotal</span><span>${total  }</span></div>
                <div className="summarydetails"><span>estimated delivery</span><span>$30</span></div>
                <div className="summarydetails"><span>estimated Tax</span><span>$10</span></div>
                <div className="summarydetailstotal"><span>Total</span><span>$390.79</span></div>
                <div className="summarydetailscheckoutbutton"><button>Pay</button></div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Cart;