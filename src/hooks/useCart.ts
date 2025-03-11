import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { cleanUpCartProducts } from "@store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"

const useCart = () => {
  const dispatch = useAppDispatch();
  const {products, loading, error} = useAppSelector(state => state.cart)
  useEffect(() => {
    dispatch(actGetFullProductsData())

    return () => {dispatch(cleanUpCartProducts())}
  }, [dispatch])

  return {products, loading, error}
}

export default useCart