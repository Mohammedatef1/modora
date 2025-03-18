import Heading from "@components/common/Heading"
import ListCartItems from "@components/common/ListCartItems"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import useCart from "@hooks/useCart"

const Cart = () => {
  const  {products, cartLoading, cartError, placeOrderHandler, accessToken, ordersLoading, ordersError}  = useCart()
  
  return (
    <>
      <Heading title="Cart" />
      <Loading error={cartError} type="cart" loading={cartLoading}><ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems></Loading>
      <CartTotal></CartTotal>
      {accessToken && <div className="flex flex-col items-center">
        <button onClick={placeOrderHandler} disabled={ordersLoading === "pending"} className="ms-auto bg-blue-500 px-4 py-2 rounded-sm text-white disabled:opacity-75 transition-opacity">Place order</button>
      </div>}
      {ordersError && <p className="w-fit ms-auto text-red-500">{ordersError}</p>}
    </>
  )
}

export default Cart