import { Link } from "react-router-dom";
import ShoppingCart from "@components/eCommerce/ShopingCart";

const Header = () => {
  return (
  <header>
    <div className="flex align-center justify-between ">
      <h1 className="logo text-slate-800 font-bold text-2xl">Quick <span className="text-white bg-primary p-2  rounded-md ">Cart</span></h1>
      <ShoppingCart></ShoppingCart>
    </div>
    <div className="flex items-center justify-between ">
      <nav className="">
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/about-us">About us</Link>
      </nav>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  </header> );
}
 
export default Header;