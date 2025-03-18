import { useAppDispatch } from "@store/hooks"
import actGetOrders from "@store/orders/actions/actGetOrders"
import { cleanUpOrders } from "@store/orders/ordersSlice"
import { useEffect } from "react"

const Orders = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(actGetOrders())

    return () => {dispatch(cleanUpOrders())}
    
  }, [dispatch])
  return (
    <div>Orders</div>
  )
}

export default Orders