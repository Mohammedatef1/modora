import CounterItem from "@components/eCommerce/CounterItem"
import Wishlist from '../../assets/svg/wishlist.svg?react'
import Cart from '../../assets/svg/cart.svg?react'
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { getTotalCartQuantity } from "@store/cart/selectors"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { logOut } from "@store/auth/authSlice"

const HeaderLeftSide = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const wishlistTotalQuantity = useAppSelector(state => state.wishlist.productsIds).length || 0
  const cartTotalQuantity = useAppSelector(getTotalCartQuantity)

  const {accessToken} = useAppSelector(state => state.auth)

  const logOutHandler = () => {
    dispatch(logOut());
    navigate("/login");
  }

  return (
    <div className="flex items-center gap-2 md:4 lg:gap-7">
      <nav className="flex items-center gap-3">
        {accessToken ? 
        <>
          <Link to="profile">
            <div className="avatar w-9 h-9 rounded-full bg-gray-200"></div>
          </Link>
          <button className="text-red-400" onClick={logOutHandler}>Logout</button> 
        </>
        : 
        <>
          <NavLink className="link" to="/register">Register</NavLink>
          <NavLink className="link" to="/login">Login</NavLink>
        </>}
      </nav>
      <CounterItem to="wishlist" Icon={Wishlist} totalQuantity={wishlistTotalQuantity} />
      <CounterItem to="cart" Icon={Cart} totalQuantity={cartTotalQuantity} />
    </div>
  )
}

export default HeaderLeftSide