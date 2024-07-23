import Order from "../components/Order";
import { data2 } from "../data2";
const Orders = () => {
    const data=data2;
    return ( <>
    <div className="bg2">
    <div className="orderscontianer">
        {data.map((item,index)=> <Order key={index} order={item}/>)}
    
        
    </div> 
    </div>
    </> );
}
 
export default Orders;