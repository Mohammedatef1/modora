import Breadcrumb from "@components/common/Breadcrumb";
import GridList from "@components/common/GridList";
import ProductCard from "@components/eCommerce/ProductCard";
import Loading from "@feedback/Loading";
import useProducts from "@hooks/useProducts";

const Products = () => {
  const {error, loading, productsFullInfo, params} = useProducts()

  return ( 
    <>
      <Breadcrumb path={`home/categories/${params.prefix}`} />
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Loading type="product" error={error} loading={loading}>
          <GridList records={productsFullInfo} renderedElementFunction={(record) => (<ProductCard key={record.id} product={{...record}} />)} />
        </Loading>
      </div>
    </>
  );
}
 
export default Products;