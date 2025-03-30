import Breadcrumb from "@components/common/Breadcrumb"
import ListCartItems from "@components/common/ListCartItems"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import useCart from "@hooks/useCart"

const Cart = () => {
  const  {products, cartLoading, cartError, placeOrderHandler, accessToken, ordersLoading, ordersError}  = useCart()
  
  return (
    <>
      <Breadcrumb path="home/cart"/>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7">
          <div className="lg:col-span-2 overflow-auto">
            <div className="min-w-[500px]">
              {products.length > 0 && <div className="grid cart-grid bg-light-pink-100 h-fit gap-x-2 md:gap-x-3 p-4 text-sm md:text-base font-semibold">
                <span className="col-span-2"></span>
                <div className="col-span-3"><p>Product</p></div>
                <div className="col-span-3"><p>Price</p></div>
                <div className="col-span-2"><p>Quantity</p></div>
                <div className="col-span-3"><p>subtotal</p></div>
                <span className="col-span-2"></span>
              </div>}

              <Loading error={cartError} type="cart" loading={cartLoading}>
                <ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems>
              </Loading>

            </div>
          </div>

          <div className="col-span-1 bg-light-pink-100">
            <CartTotal></CartTotal>
            {accessToken && <div className="flex flex-col items-center">
              <button onClick={placeOrderHandler} disabled={ordersLoading === "pending"} className="ms-auto bg-blue-500 px-4 py-2 rounded-sm text-white disabled:opacity-75 transition-opacity">Place order</button>
            </div>}
            {ordersError && <p className="w-fit ms-auto text-red-500">{ordersError}</p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart