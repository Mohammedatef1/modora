import BestProducts from "@components/common/BestProducts";
import FeatureHighlight from "@components/common/FeatureHighlight";
import Features from "@components/common/Features";
import Hero from "@components/common/Hero";
import experienceImage from "@assets/images/experience image.png"
import materialImage from "@assets/images/material image.png"
import materialCompoundFirst from "@assets/images/material compound first.png"
import materialCompoundSecond from "@assets/images/material compound second.png"

const Home = () => {
  return ( 
  <div>
    <Hero/>
    <Features/>
    <BestProducts/>

    <FeatureHighlight title="We provide you the best experience" subtitle="Experiences" ctaLabel="More info" ctaLink="/" description="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials" featureImg={experienceImage} mode="standard" />

    <FeatureHighlight title="Very serious materials for making furniture" subtitle="Materials" ctaLabel="More info" ctaLink="/" description="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price" featureImg={materialImage} mode="compact" compactFirstImage={materialCompoundFirst} compactSecondImage={materialCompoundSecond}/>
  </div> );
}
 
export default Home;