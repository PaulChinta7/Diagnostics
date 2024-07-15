import { useState } from "react";

const Button = (props) => {
    const name=props.name;
    return ( <>
    <button className="button">{name}</button>
    </> );
}
 
export default Button;