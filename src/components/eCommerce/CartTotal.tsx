import { useAppSelector } from "@store/hooks"
import { getTotalCart } from "src/utils";

const CartTotal = () => {
  const {products} = useAppSelector(state => state.cart);
  
  const cartSubTotal = getTotalCart(products)
  
  return (
    <div className="flex items-center justify-between py-3">
      <h3 className="font-bold">Subtotal:</h3>
      <h3>{cartSubTotal.toFixed(2)} EGP</h3>
    </div>
  )
}

export default CartTotal