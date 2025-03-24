import actGetCategories from "@store/categories/actions/getAllCategories";
import { cleanUpCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";

const useCategories = () => {
  const dispatch = useAppDispatch()
  const {error, loading , records} = useAppSelector(state => state.categories);

  useEffect(()=>{
    dispatch(actGetCategories())
    return () => {
      dispatch(cleanUpCategories());
    }
  },[dispatch])

  return {error, loading , records}
}

export default useCategories