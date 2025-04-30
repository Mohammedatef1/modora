import Breadcrumb from "@components/common/Breadcrumb";
import GridList from "@components/common/GridList";
import MaxWidthWrapper from "@components/common/MaxWidthWrapper";
import ProductCard from "@components/eCommerce/ProductCard";
import Loading from "@feedback/Loading";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const {error, loading, productsFullInfo, params} = useProducts()

  return ( 
    <>
      <Breadcrumb path={`home/categories/${params.prefix}`} />
      <MaxWidthWrapper>
        <Loading type="product" error={error} loading={loading}>
          <GridList records={productsFullInfo} renderedElementFunction={(record) => (<ProductCard key={record.id} product={{...record}} />)} />
        </Loading>
      </MaxWidthWrapper>
    </>
  );
}
 
export default Products;