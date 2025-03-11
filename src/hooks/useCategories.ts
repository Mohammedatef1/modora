import actGetCategories from "@store/categories/actions/getAllCategories";
import { cleanUpCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch()
  const {error, loading , records} = useAppSelector(state => state.categories);

  useEffect(()=>{
    const response = dispatch(actGetCategories())
    return () => {
      dispatch(cleanUpCategories());
      response.abort();
    }
  },[dispatch])

  return {error, loading , records}
}

export default useCategories