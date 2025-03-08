import { TProduct } from "@customTypes/product"
import { changeQuantity, removeFromCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo } from "react";

const CartItem = memo(({id, img, price, max, title, quantity} : TProduct) => {
  const dispatch = useAppDispatch()
  const maxQuantityArray = Array(max).fill(0).map((_, index) => index + 1);
  const onChangeHandler = (e) => {
    dispatch(changeQuantity({
      id,
      value: parseInt(e.target.value)
    }))
  }
  return (
    <div className="grid grid-cols-6 min-h-[200px] py-3 border-b gap-x-2 border-gray-400 last:border-b-0 items-center">
      <div className="product-image bg-gray-200 w-full h-full">
        {/* <img src="{img}" className="w-full h-full object-contain" alt="" /> */}
      </div>
      <div className="col-span-2">
        <h2>{title}</h2>
      </div>
      <div>
        <h3>{price.toFixed(2)} EGP</h3>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <label>Quantity</label>
        <select name="quantity" onChange={onChangeHandler} defaultValue={quantity} id={`${id}-quantity`} className="w-16 p-1 max-w-[60%]">
          {maxQuantityArray.map((el) => (<option key={el} value={el}>{el}</option>))}
        </select>
      </div>
      <div>
        <button onClick={() => {dispatch(removeFromCart(id))}} className="bg-red-500 px-4 py-2 rounded-sm text-white">Remove</button>
      </div>
    </div>
  )
})

export default CartItem