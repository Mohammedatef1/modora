import Breadcrumb from "@components/common/Breadcrumb"
import GridList from "@components/common/GridList"
import MaxWidthWrapper from "@components/common/MaxWidthWrapper"
import ProductCard from "@components/eCommerce/ProductCard"
import Loading from "@feedback/Loading"
import useWishlist from "@hooks/useWishlist"

const Wishlist = () => {
  const {productsFullInfo, error, loading} = useWishlist()

  return (
  <>
    <Breadcrumb path="home/wishlist"/>
    <MaxWidthWrapper>
      <Loading type="product" error={error} loading={loading}>
        <GridList records={productsFullInfo} renderedElementFunction={(record) => (<ProductCard product={record} key={record.id}/>)}/>
      </Loading>
    </MaxWidthWrapper>
  </>
  )
}

export default Wishlist