import CartItem from "../components/CartItem";
import {useSelector} from 'react-redux';
const Cart = () => {
    const cartitems=useSelector((state)=>state.cart);
    
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
            <div className="checkout"></div>
        </div>
    </div>
    </> );
}
 
export default Cart;