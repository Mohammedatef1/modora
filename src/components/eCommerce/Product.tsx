import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
import { TProduct } from "src/customTypes/product";


const Product = memo(({id, img , price , title, max, quantity}: TProduct) => {
  const dispatch = useAppDispatch()
  const [isDisabled, setIsDisabled] = useState(false);

  const currentRemainingItems = max - (quantity ?? 0 );
  const hasReachedMaxQuantity = currentRemainingItems <= 0 ? true : false;

  useEffect(() => {
    if(!isDisabled){
      return
    }

    const debounce = setTimeout(() => {
      setIsDisabled(false)
    }, 300);

    return () => clearTimeout(debounce)
  }, [isDisabled])

  const addToCartHandler = ()=>{
    if(hasReachedMaxQuantity) return
    dispatch(addToCart(id));
    setIsDisabled(true)
  }

  return (  
  <div product-id={`${id}`} className="flex flex-col items-center gap-4">
    <div className="aspect-[1/1.2] w-full">
      <img src={img} loading="lazy" alt={title} className="w-full h-full" />
    </div>
    <p className="text-lg">{title}</p>
    <p className="text-lg">{price}</p>
    <p className="text-lg">{hasReachedMaxQuantity ? "You reached the max quantity added to the cart for this item" : `there is ${currentRemainingItems} items remaining` }</p>
    <button disabled={isDisabled || hasReachedMaxQuantity} onClick={addToCartHandler} className="bg-primary rounded-md px-6 py-2 text-lg text-background font-semibold transition-opacity disabled:opacity-60">Add to cart</button>
  </div> );
})
 
export default Product;