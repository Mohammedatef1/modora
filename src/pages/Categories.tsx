import GridList from "@components/common/GridList";
import Heading from "@components/common/Heading";
import Category from "@components/eCommerce/Category";
import Loading from "@feedback/Loading";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const {error, loading , records} = useCategories()

  return ( 
    <>
      <Heading title="Categories" />
      <Loading type="category" error={error} loading={loading}>
        <GridList records={records} renderedElementFunction={(record) => (<Category {...record} key={record.id}/>)}/>
      </Loading>
    </> );
}
 
export default Categories;