import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import useGetUser from "@hooks/getUser";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const {user} = useGetUser()
  console.log(user)
  return ( <main>
    <Header/>
    <Outlet/>
    <Footer/>
  </main> );
}
 
export default MainLayout;