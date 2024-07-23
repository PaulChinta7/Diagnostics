const Order = (props) => {
    const total=parseFloat(props.order.subtotal)+(parseFloat(props.order.subtotal)*parseFloat(props.order.tax))/100+parseFloat(props.order.delivery_fee);
    const quant=props.order.products.reduce((sum,item)=>sum+Number(item.product_quantity),0);
    console.log();
    return ( <>
    <div className="singleorder">

       
<div className="ordersheading">
    <span className="ordersdate">{props.order.date} | {props.order.time}</span>
    <div className="ordersdetails">
    <span>order#{props.order.order_number}</span>
    <span>total payment:{total.toFixed(2)}</span>
    <span>Quantity:{quant}</span>
    </div>
    <div className="ordersdeatilsheading">
        <span>Products</span>
        <span>sample</span>
        <span>patient details</span>
        <span>reports</span>
    </div>
</div>
<div className="orders">
    {props.order.products.map((item)=>
    
    <div className="order">
        <span>{item.product_name}</span>
        <span>{item.sample}</span>
        <span>{item.patient.name}</span>
        <span>download</span>
    </div>
    )}
   

</div>
</div></> );
}
 
export default Order;