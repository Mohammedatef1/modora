import Breadcrumb from "@components/common/Breadcrumb";
import GridList from "@components/common/GridList";
import Category from "@components/eCommerce/Category";
import Loading from "@feedback/Loading";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const {error, loading , records} = useCategories()

  return ( 
    <>
      <Breadcrumb path="home/categories"/>
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Loading type="category" error={error} loading={loading}>
          <GridList records={records} renderedElementFunction={(record) => (<Category {...record} key={record.id}/>)}/>
        </Loading>
      </div>
    </> );
}
 
export default Categories;