import Heading from "@components/common/Heading"
import Loading from "@feedback/Loading"
import { useAppDispatch, useAppSelector } from "@store/hooks"
import actGetOrders from "@store/orders/actions/actGetOrders"
import { cleanUpOrders } from "@store/orders/ordersSlice"
import { useEffect } from "react"

const Orders = () => {
  const dispatch = useAppDispatch()

  const { userOrders, loading, error } = useAppSelector(state => state.orders)

  useEffect(() => {
    dispatch(actGetOrders())

    return () => {dispatch(cleanUpOrders())}

  }, [dispatch])
  return (
    <>
      <Heading title="My orders"/>
      <Loading loading={loading} error={error} type="orders" >
        <div className="divide-y-2 divide-gray-200">
          {userOrders.length > 0 ? 
          (<div className="grid grid-cols-3 p-2 text-sm md:text-base font-bold">
            <p>Order Number</p>
            <p>Items</p>
            <p>Total price</p>
          </div>) : (
          <div className="text-center font-semibold">
            You have no orders!
          </div>
          )}
          {userOrders.map((order, index) => 
          (<div key={order.id} className="grid grid-cols-3 p-2 hover:bg-gray-100 cursor-pointer transition-colors text-sm md:text-base">
            <p className="font-semibold">#{index + 1}</p>
            <p>{order.orderList.length} item(s)</p>
            <p>{order.subtotal.toFixed(2)} EGP</p>
          </div>))}
        </div>
      </Loading>
    </>
  )
}

export default Orders