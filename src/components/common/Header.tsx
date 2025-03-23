import { NavLink } from "react-router-dom";
import HeaderLeftSide from "./HeaderLeftSide";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import actGetWishlistProducts from "@store/wishlist/actions/actGetWishlistProducts";

const Header = () => {
  const dispatch = useAppDispatch()

  const {accessToken} = useAppSelector(state => state.auth)

  useEffect(()=> {
    dispatch(actGetWishlistProducts("productsIds"))
  }, [dispatch, accessToken])


  return (
  <header className="max-w-7xl mx-auto p-4 sm:p-6">
    <div className="flex align-center justify-between ">
      <h1 className="logo text-slate-800 font-bold text-2xl">Quick Cart</h1>
      <nav className="flex items-center gap-2 md:gap-10 lg:gap-16 nav-links-wrapper">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/categories">Categories</NavLink>
        <NavLink className="link" to="/about-us">About us</NavLink>
      </nav>
      <HeaderLeftSide/>
    </div>
  </header> );
}
 
export default Header;