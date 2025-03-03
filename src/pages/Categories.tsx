import Category from "@components/eCommerce/Category";
import Loading from "@feedback/Loading";
import actGetCategories from "@store/categories/actions/getAllCategories";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch()
  const {error, loading , records} = useAppSelector(state => state.categories);
  

  useEffect(()=>{
    if(records.length == 0){
      dispatch(actGetCategories())
    }
  },[dispatch, records])

  const renderedCategories = records.length > 0 ? records.map(record => (
    <Category {...record} key={record.id}/>
  )) : "No categories found"

  return ( 
  <Loading error={error} loading={loading}>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 p-6 md:p-12">
      {renderedCategories}
    </div>
  </Loading> );
}
 
export default Categories;