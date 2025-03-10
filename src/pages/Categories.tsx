import GridList from "@components/common/GridList";
import Heading from "@components/common/Heading";
import Category from "@components/eCommerce/Category";
import Loading from "@feedback/Loading";
import actGetCategories from "@store/categories/actions/getAllCategories";
import { cleanUpCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch()
  const {error, loading , records} = useAppSelector(state => state.categories);
  

  useEffect(()=>{
    dispatch(actGetCategories())
    return () => {dispatch(cleanUpCategories())} 
  },[dispatch])

  return ( 
    <>
      <Heading>Categories</Heading>
      <Loading error={error} loading={loading}>
        <GridList records={records} renderedElementFunction={(record) => (<Category {...record} key={record.id}/>)}/>
      </Loading>
    </> );
}
 
export default Categories;