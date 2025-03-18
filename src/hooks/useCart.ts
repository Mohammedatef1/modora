import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { cleanUpCartProducts } from "@store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actPlaceOrder from "@store/orders/actions/actPlaceOrder"
import { useEffect } from "react"

const useCart = () => {
  const dispatch = useAppDispatch();
  const {products, loading, error} = useAppSelector(state => state.cart)
  const {accessToken} = useAppSelector(state => state.auth)

  useEffect(() => {
    const response = dispatch(actGetFullProductsData())

    return () => {
      dispatch(cleanUpCartProducts());
      response.abort()
    }
  }, [dispatch])

  const placeOrderHandler = () => {
    dispatch(actPlaceOrder())
  }

  return {products, loading, error, placeOrderHandler, accessToken}
}

export default useCart