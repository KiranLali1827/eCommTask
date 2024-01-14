import { useSelector } from "react-redux";
import cart from "../cart_img.png";
import { Link } from "react-router-dom";

const Header = () => {
    const result = useSelector((mydata)=> mydata.cartData);
    console.warn("The Header UseSelector", result)
  return (
    <div className="Header">
      <Link to="/"><h3 className="Header-logo">E-comm Dashboard</h3></Link>
      <Link to="/Cart">
      <div className="cart-div">
        <span>{result.length}</span>
        <img src={cart} alt="" className="img"></img>
      </div>
      </Link>
     
    </div>
  );
};
export default Header;
