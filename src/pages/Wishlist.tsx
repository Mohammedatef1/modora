import Breadcrumb from "@components/common/Breadcrumb"
import GridList from "@components/common/GridList"
import ProductCard from "@components/eCommerce/ProductCard"
import Loading from "@feedback/Loading"
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const {productsFullInfo, error, loading} = useWishlist()

  return (
  <>
    <Breadcrumb path="home/wishlist"/>
    <div className="max-w-7xl m-auto p-4 sm:p-6">
      <Loading type="product" error={error} loading={loading}>
        <GridList records={productsFullInfo} renderedElementFunction={(record) => (<ProductCard product={record} key={record.id}/>)}/>
      </Loading>
    </div>
  </>
  )
}

export default Wishlist