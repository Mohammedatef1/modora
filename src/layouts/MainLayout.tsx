import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import useGetUser from "@hooks/getUser";
import { setSession } from "@store/auth/authSlice";
import { useAppDispatch } from "@store/hooks";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const dispatch = useAppDispatch()
  const {user, accessToken, error} = useGetUser()

  useEffect(() => {
    if(!error && user) {
      dispatch(setSession({user: user, accessToken: accessToken}))
    }
  }, [dispatch, accessToken, user, error])

  return ( <main>
    <Header/>
    <Outlet/>
    <Footer/>
  </main> );
}
 
export default MainLayout;