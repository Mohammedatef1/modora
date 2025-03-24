import actGetFullProductsData from "@store/cart/actions/actGetFullProductsData"
import { cleanUpCartProducts, clearAllCartData } from "@store/cart/cartSlice"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actPlaceOrder from "@store/orders/actions/actPlaceOrder"
import { cleanUpOrders } from "@store/orders/ordersSlice"
import { useEffect } from "react"

const useCart = () => {
  const dispatch = useAppDispatch();
  const {products, loading: cartLoading, error: cartError} = useAppSelector(state => state.cart)
  const {accessToken} = useAppSelector(state => state.auth)
  const {loading: ordersLoading , error: ordersError} = useAppSelector(state => state.orders)

  useEffect(() => {
    dispatch(actGetFullProductsData())

    return () => {
      dispatch(cleanUpCartProducts());
      dispatch(cleanUpOrders())
    }
  }, [dispatch])

  const placeOrderHandler = () => {
    dispatch(actPlaceOrder()).unwrap().then((() => {
      dispatch(clearAllCartData())
    }))
  }

  return {products, cartLoading, cartError, ordersLoading, ordersError, placeOrderHandler, accessToken}
}

export default useCart