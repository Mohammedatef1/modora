import BestProducts from "@components/common/BestProducts";
import FeatureHighlight from "@components/common/FeatureHighlight";
import Features from "@components/common/Features";
import Hero from "@components/common/Hero";
import experienceImage from "@assets/images/experience image.png"

const Home = () => {
  return ( 
  <div>
    <Hero/>
    <Features/>
    <BestProducts/>
    <FeatureHighlight title="We provide you the best experience" subtitle="EXPERIENCE" ctaLabel="More info" ctaLink="/" description="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials" imgSrc={experienceImage} />
  </div> );
}
 
export default Home;