import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return ( <main className="">
    <Header/>
    <Outlet/>
    <Footer/>
  </main> );
}
 
export default Mainlayout;