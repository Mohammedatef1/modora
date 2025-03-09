import { addToCart } from "@store/cart/cartSlice";
import { useAppDispatch } from "@store/hooks";
import { memo, useEffect, useState } from "react";
import { TProduct } from "src/customTypes/product";
import Like from '@assets/svg/like.svg?react'
import LikeFill from '@assets/svg/like-fill.svg?react'
import actLikeToggle from "@store/wishlist/actions/actLikeToggle";


const Product = memo(({id, img , price , title, max, quantity, isLiked}: TProduct) => {
  const dispatch = useAppDispatch()
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  console.log(quantity)

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

  const likeToggleHandler = () => {
    setIsLoading(true)
    dispatch(actLikeToggle(id)).finally(() => setIsLoading(false))
  }

  return (  
  <div product-id={`${id}`} className="flex flex-col items-center gap-4">
    <div className="aspect-[1/1.2] w-full relative">
      <img src={img} loading="lazy" alt={title} className="w-full h-full" />
      <button className="absolute top-2 right-2 w-7 h-7 cursor-pointer bg-gray-200 rounded-full flex items-center justify-center hover:shadow-md transition disabled:opacity-60" disabled={isLoading} onClick={likeToggleHandler}>
        { isLiked ? <LikeFill/> : <Like/> }
      </button>
    </div>
    <p className="text-lg">{title}</p>
    <p className="text-lg">{price.toFixed(2)} EGP</p>
    <p className="text-lg">{hasReachedMaxQuantity ? "You reached the max quantity added to the cart for this item" : `You can add ${currentRemainingItems} more item(s)` }</p>
    <button disabled={isDisabled || hasReachedMaxQuantity} onClick={addToCartHandler} className="bg-primary rounded-md px-6 py-2 text-lg text-background font-semibold transition-opacity disabled:opacity-60">Add to cart</button>
  </div> );
})
 
export default Product;