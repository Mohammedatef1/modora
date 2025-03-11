import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetWishlistProducts from "@store/wishlist/actions/actGetWishlistProducts"
import { productsCleanUp } from "@store/wishlist/wishlistSlisce"
import { useEffect } from "react"

const useWishlist = () => {
  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(state => state.wishlist)
  const {items} = useAppSelector(state => state.cart)
  const {productsIds , products} = wishlist
  const productsFullInfo = products.map(el =>  ({...el , isLiked : productsIds.includes(el.id), quantity: items[el.id] }))
  useEffect(() => {
    dispatch(actGetWishlistProducts())

    return () => {dispatch(productsCleanUp())}
  }, [dispatch])

  return {productsFullInfo}
}

export default useWishlist