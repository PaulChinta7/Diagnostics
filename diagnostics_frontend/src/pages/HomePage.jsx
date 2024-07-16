import ProductCard from "../components/ProductCard";
import openingImage from "../images/opening.jpg"
const HomePage = () => {
    return ( <><div className="bg homelayout">
        <div className="quote">
        <div className="lineone"><div>Unlock</div><div className="lineone2">Your</div></div>
        <span className="linetwo">Health Insights</span>
        <p className="linethree">Seamless Lab Testing Solutions Delivered to Your Doorstep</p>
        </div>
        <img src={openingImage} alt="Opening" />
       </div>
    </> );
}
 
export default HomePage;