const Order = () => {
    return ( <>
    <div className="singleorder">

       
<div className="ordersheading">
    <span className="ordersdate">07/22/2024 | 1:54pm</span>
    <div className="ordersdetails">
    <span>order#21284021840214</span>
    <span>total payment: $390.85</span>
    <span>Quantity:3</span>
    </div>
    <div className="ordersdeatilsheading">
        <span>Products</span>
        <span>sample</span>
        <span>patient details</span>
        <span>reports</span>
    </div>
</div>
<div className="orders">
    <div className="order">
        <span>COVID RTPCR</span>
        <span>yet</span>
        <span><a href="">preethampaul25</a></span>
        <span><a href="">download</a></span>
    </div>
    <div className="order">
        <span>COVID RTPCR</span>
        <span>yet</span> 
        <span><a href="">preethampaul25</a></span>
        <span>2 days</span>
    </div>
    <div className="order">
        <span>COVID RTPCR</span>
        <span>yet</span>
        <span><a href="">preethampaul25</a></span>
        <span><a href="">download</a></span>
    </div>


</div>
</div></> );
}
 
export default Order;