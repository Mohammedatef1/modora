import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const Mainlayout = () => {
  return ( <main className="container mx-auto">
    <Header/>
    <div className="main-content"></div>
    <Footer/>
  </main> );
}
 
export default Mainlayout;