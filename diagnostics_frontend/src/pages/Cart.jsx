import CartItem from "../components/CartItem";
import {useSelector} from 'react-redux';
import { useState } from "react";
const Cart = () => {
    const cartitems=useSelector((state)=>state.cart);
    var  total=cartitems.reduce((sum, item) => {
        return sum + (parseFloat(item.price) * parseFloat (item.quantity));
      }, 0.0);
    total=total.toFixed(2);
    var taxpercent=8;
    var delivery=30;
    var est_tax=(total*taxpercent/100).toFixed(2);
    var pay=(parseFloat(total)+parseFloat(delivery)+parseFloat(est_tax)).toFixed(2);
    
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
                   
                    {cartitems.map((item,index)=> <CartItem key={index} ind={index} product={item}/>)}

                </div>
            </div>
        </div>
        <div className="checkoutcontainer">
            <div className="checkout">
                <span className="summarydetailstitle">Summary</span>
                <div className="summarydetails"><span>promo code</span> <span><input type="text" /></span></div>
                <div className="summarydetails"><span>discount</span><span>$0.00</span></div>
                <div className="summarydetails"><span>subtotal</span><span>${total}</span></div>
                <div className="summarydetails"><span>estimated delivery</span><span>${delivery}</span></div>
                <div className="summarydetails"><span>estimated Tax</span><span>${est_tax}</span></div>
                <div className="summarydetailstotal"><span>Total</span><span>${pay}</span></div>
                <div className="summarydetailscheckoutbutton"><button>Pay</button></div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Cart;