import { NavLink, useNavigate } from "react-router-dom";
import HeaderLeftSide from "./HeaderLeftSide";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { logOut } from "@store/auth/authSlice";
import { productsIdsCleanUp } from "@store/wishlist/wishlistSlice";

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {accessToken} = useAppSelector(state => state.auth)

  const logOutHandler = () => {
    dispatch(logOut());
    dispatch(productsIdsCleanUp())
    navigate("/login");
  }
  return (
  <header>
    <div className="flex align-center justify-between ">
      <h1 className="logo text-slate-800 font-bold text-2xl">Quick <span className="text-white bg-primary p-2  rounded-md ">Cart</span></h1>
      <HeaderLeftSide/>
    </div>
    <div className="flex items-center justify-between my-4 p-4 bg-secondary text-background nav-links-wrapper">
      <nav className="flex items-center gap-3">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/categories">Categories</NavLink>
        <NavLink className="link" to="/about-us">About us</NavLink>
      </nav>
      <nav className="flex items-center gap-3">
        {accessToken ? 
        <button className="text-red-400" onClick={logOutHandler}>Logout</button> 
        : 
        <>
          <NavLink className="link" to="/register">Register</NavLink>
          <NavLink className="link" to="/login">Login</NavLink>
        </>}
      </nav>
    </div>
  </header> );
}
 
export default Header;