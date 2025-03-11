import CounterItem from "@components/eCommerce/CounterItem"
import Wishlist from '../../assets/svg/wishlist.svg?react'
import Cart from '../../assets/svg/cart.svg?react'
import { useAppSelector } from "@store/hooks"
import { getTotalCartQuantity } from "@store/cart/selectors"

const HeaderLeftSide = () => {
  const wishlistTotalQuantity = useAppSelector(state => state.wishlist.productsIds).length || 0
  const cartTotalQuantity = useAppSelector(getTotalCartQuantity)

  return (
    <div className="flex items-center gap-x-2">
      <CounterItem title="Wishlist" to="wishlist" Icon={Wishlist} totalQuantity={wishlistTotalQuantity} />
      <CounterItem title="Cart" to="cart" Icon={Cart} totalQuantity={cartTotalQuantity} />
    </div>
  )
}

export default HeaderLeftSide