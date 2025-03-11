import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/actions/actGetProducts";
import { productsCleanUp } from "@store/products/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const useProducts = () => {
  const dispatch = useAppDispatch() 
  const {records , loading , error} = useAppSelector((state => state.products))
  const {items} = useAppSelector(state => state.cart)
  const likedProducts = useAppSelector(state => state.wishlist.productsIds)
  const params = useParams()

  const productsFullInfo = records.map(el =>({
      ...el,
      quantity: items[el.id] || 0,
      isLiked : likedProducts.includes(el.id)
    })
  )

  useEffect(()=>{
    dispatch(actGetProducts(params.prefix as string))
    return () => {
      dispatch(productsCleanUp())
    }
  },[dispatch, params])

  return {loading, error, productsFullInfo, params}
}

export default useProducts