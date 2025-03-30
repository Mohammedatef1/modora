import { useAppSelector } from "@store/hooks"
import { getTotalCart } from "src/utils";

const CartTotal = () => {
  const {products} = useAppSelector(state => state.cart);
  
  const cartSubTotal = getTotalCart(products)
  
  return (
    <div>
      <h2 className="font-semibold text-2xl md:text-3xl text-center mb-10 md:mb-16">Cart Totals</h2>
      <div className="flex items-center justify-between py-3 font-sm md:font-base">
        <h3 className="font-semibold">Subtotal:</h3>
        <h3 className="opacity-75">{cartSubTotal.toFixed(2)} EGP</h3>
      </div>
      <div className="flex items-center justify-between py-3">
        <h3 className="font-semibold">Total:</h3>
        <h3 className="text-primary-dark text-lg md:text-xl">{cartSubTotal.toFixed(2)} EGP</h3>
      </div>
    </div>
  )
}

export default CartTotal