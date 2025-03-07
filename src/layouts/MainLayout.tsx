import Footer from "@components/common/Footer";
import Header from "@components/common/Header";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return ( <main className="max-w-7xl mx-auto p-4 sm:p-6">
    <Header/>
    <Outlet/>
    <Footer/>
  </main> );
}
 
export default Mainlayout;