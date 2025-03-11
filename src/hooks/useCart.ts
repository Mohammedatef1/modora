import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { cleanUpCartProducts } from "@store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import { useEffect } from "react"

const useCart = () => {
  const dispatch = useAppDispatch();
  const {products, loading, error} = useAppSelector(state => state.cart)
  useEffect(() => {
    const response = dispatch(actGetFullProductsData())

    return () => {
      dispatch(cleanUpCartProducts());
      response.abort()
    }
  }, [dispatch])

  return {products, loading, error}
}

export default useCart