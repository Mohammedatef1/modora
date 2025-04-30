import Breadcrumb from "@components/common/Breadcrumb"
import ListCartItems from "@components/common/ListCartItems"
import MaxWidthWrapper from "@components/common/MaxWidthWrapper"
import CartItem from "@components/eCommerce/CartItem"
import CartTotal from "@components/eCommerce/CartTotal"
import Loading from "@feedback/Loading"
import useCart from "@hooks/useCart"

const Cart = () => {
  const  {products, cartLoading, cartError, placeOrderHandler, accessToken, ordersLoading, ordersError}  = useCart()
  
  return (
    <>
      <Breadcrumb path="home/cart"/>
      <MaxWidthWrapper fullPadding>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-7">
          <div className="lg:col-span-2 overflow-auto">
            <div className="min-w-[500px]">
              {products.length > 0 && <div className="grid cart-grid bg-light-pink-100 h-fit gap-x-2 md:gap-x-3 p-4 text-sm md:text-base font-semibold">
                <span className="col-span-2"></span>
                <div className="col-span-3"><p>Product</p></div>
                <div className="col-span-3"><p>Price</p></div>
                <div className="col-span-2"><p>Quantity</p></div>
                <div className="col-span-3"><p>subtotal</p></div>
                <span className="col-span-1"></span>
              </div>}

              <Loading error={cartError} type="cart" loading={cartLoading}>
                <ListCartItems records={products} renderedItemFunction={(product) => (<CartItem key={product.id} {...product}></CartItem>)}></ListCartItems>
              </Loading>

            </div>
          </div>

          <div className="col-span-1 bg-light-pink-100 pt-4 pb-8 px-16 h-fit">
            <CartTotal></CartTotal>
            {accessToken && <div className="flex flex-col items-center">
              <button onClick={placeOrderHandler} disabled={ordersLoading === "pending"} className="bg-transparent px-4 py-2 disabled:opacity-75 transition-opacity my-10 border-secondary border-2 rounded-lg">Place order</button>
            </div>}
            {ordersError && <p className="text-center text-red-500">{ordersError}</p>}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Cart