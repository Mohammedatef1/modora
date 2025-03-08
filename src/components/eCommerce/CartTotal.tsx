import { useAppSelector } from "@store/hooks"

const CartTotal = () => {
  const {products} = useAppSelector(state => state.cart);
  
  const cartSubTotal = products.reduce((previousValue, el) => {
    const price = el.price;
    const quantity = el.quantity || 1;
    if(quantity && typeof quantity == "number"){
      return previousValue + price * quantity
    }
    return previousValue
  }, 0)
  
  return (
    <div className="flex items-center justify-between py-3">
      <h3 className="font-bold">Subtotal:</h3>
      <h3>{cartSubTotal.toFixed(2)} EGP</h3>
    </div>
  )
}

export default CartTotal