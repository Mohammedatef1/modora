import { TProduct } from "@customTypes/product"
import { changeQuantity, removeFromCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo } from "react";
import Delete from "@assets/svg/delete.svg?react"

const CartItem = memo(({id, price, max, title, img, quantity} : TProduct) => {
  const dispatch = useAppDispatch()
  const maxQuantityArray = Array(max).fill(0).map((_, index) => index + 1);
  const onChangeHandler = (e :  React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeQuantity({
      id,
      value: parseInt(e.target.value)
    }))
  }
  return (
    <div className="grid cart-grid bg-light-pink-100 gap-x-2 md:gap-x-3 p-4 text-sm md:text-base py-3 border-b border-gray-400 last:border-b-0 items-center">

      <div className="col-span-2 max-w-24 aspect-square">
        <img src={img} className="w-full h-full object-contain" alt="" /> 
      </div>
      <div className="col-span-3">
        <h2>{title}</h2>
      </div>
      <div className="col-span-3">
        <h3>{price.toFixed(2)} EGP</h3>
      </div>
      <div className="col-span-2">        
        <select name="quantity" onChange={onChangeHandler} defaultValue={quantity} id={`${id}-quantity`} className="w-16 p-1 max-w-full">
          {maxQuantityArray.map((el) => (<option key={el} value={el}>{el}</option>))}
        </select>
      </div>
      <div className="col-span-3">
        <h3>{(price * ( quantity || 1)).toFixed(2)} EGP</h3>
      </div>
      <div className="col-span-2">
        <button onClick={() => {dispatch(removeFromCart(id))}}>
          <Delete className="fill-red-700" />
        </button>
      </div>

    </div>
  )
})

export default CartItem