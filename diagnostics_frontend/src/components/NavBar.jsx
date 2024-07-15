import { Link } from "react-router-dom";
const NavBar = () => {
    return ( <> 
    
      <nav>
      <div className="logo"><Link to="/home" className="logolink">Diagnostics</Link></div>
        <ul >
          <li> <Link to="/products" className="navlink">products</Link> </li>
          <li> <Link to="/cart" className="navlink">cart</Link> </li>
          <li> <Link to="/orders" className="navlink">orders</Link> </li>
          <li> <Link to="/bundles" className="navlink">bundles</Link> </li>
          <li> <Link to="/account" className="navlink">account</Link> </li>
          <li> <Link to="/cart" className="navlink">log out</Link> </li>
        </ul>
      </nav>
      </> );
}
 
export default NavBar;