import { TProduct } from "@customTypes/product"
import { Link } from "react-router-dom"
import { capitalizeFirstLetter } from "src/utils"
import Rating from "../common/Rating"
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@store/hooks'
import { addToCart } from '@store/cart/cartSlice'
import actLikeToggle from '@store/wishlist/actions/actLikeToggle'

import Plus from '@assets/svg/plus.svg?react'
import Like from '@assets/svg/like.svg?react'
import LikeFill from '@assets/svg/like-fill.svg?react'

interface ProductCardProps {
  product: TProduct
}

const ProductCard = ({product} : ProductCardProps) => {
  const {id, cat_prefix, img, max, price, title, isAuthenticated, isLiked, quantity} = product

  const dispatch = useAppDispatch()
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

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

  const addToCartHandler = () => {
    if(hasReachedMaxQuantity) return
    dispatch(addToCart(id));
    setIsDisabled(true)
  }

  const likeToggleHandler = () => {
    if(isAuthenticated){
      setIsLoading(true)
      dispatch(actLikeToggle(id)).finally(() => setIsLoading(false))
    }else {
      // here i will add error notification
      //setOpenModal(true)
    }
  }

  return (
    <div className="product-card rounded-2xl overflow-hidden bg-white">
      <Link to="">
        <div className="bg-light-gray-50 p-3 md:p-4 aspect-square relative">
          <img src={img} alt={`${title}'s image`} className="w-full h-full object-contain" />
          <button className="absolute top-4 right-4 w-7 h-7 cursor-pointer rounded-full flex items-center justify-center hover:shadow-md transition disabled:opacity-60" disabled={isLoading} onClick={likeToggleHandler}>
          { isLiked ? <LikeFill /> : <Like /> }
        </button>
        </div>
      </Link>
      <div className="py-3 md:py-4 px-3 md:px-5">
        <div className="flex flex-col gap-y-1 mb-6 md:mb-9">
          <p className="opacity-60 text-base md:text-lg leading-none">{capitalizeFirstLetter(cat_prefix)}</p>
          <Link to="" className="font-bold text-lg md:text-xl text-slate">{title}</Link>
          <Rating rating={5}/>
        </div>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <p className="font-semibold text-slate  text-lg md:text-xl">EGP {price.toFixed(2)}</p>
          <button disabled={isDisabled || hasReachedMaxQuantity} onClick={addToCartHandler} className="size-12 rounded-full bg-slate flex items-center justify-center transition-opacity disabled:opacity-60">
            <Plus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard