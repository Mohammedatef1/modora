import Breadcrumb from "@components/common/Breadcrumb";
import GridList from "@components/common/GridList";
import MaxWidthWrapper from "@components/common/MaxWidthWrapper";
import Category from "@components/eCommerce/Category";
import Loading from "@feedback/Loading";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const {error, loading , records} = useCategories()

  return ( 
    <>
      <Breadcrumb path="home/categories"/>
      <MaxWidthWrapper fullPadding>
        <Loading type="category" error={error} loading={loading}>
          <GridList records={records} renderedElementFunction={(record) => (<Category {...record} key={record.id}/>)}/>
        </Loading>
      </MaxWidthWrapper>
    </> );
}
 
export default Categories;