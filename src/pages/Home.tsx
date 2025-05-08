import { lazy, Suspense } from "react";

import Hero from "@components/common/Hero";

const BestSellingProducts = lazy(() => import("@components/common/BestSellingProducts"));
const FeatureHighlight = lazy(() => import("@components/common/FeatureHighlight"));
const Features = lazy(() => import("@components/common/Features"));
const Testimonials = lazy(() => import("@components/common/Testimonials"));


import experienceImage from "@assets/images/experience image.png"
import materialImage from "@assets/images/material image.png"
import materialCompoundFirst from "@assets/images/material compound first.png"
import materialCompoundSecond from "@assets/images/material compound second.png"
import Loader from "@components/feedback/Loader";

const Home = () => {
  return ( 
  <div>
    <Hero />

    <Suspense fallback={<div className="h-20 py-2"><Loader /></div>}>
      <Features />
      <BestSellingProducts tabs={['Chairs', 'Beds', 'Sofa', 'Lamp']} />

      <FeatureHighlight title="We provide you the best experience" subtitle="Experiences" ctaLabel="More info" ctaLink="/" description="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials" featureImg={experienceImage} mode="standard" />

      <FeatureHighlight title="Very serious materials for making furniture" subtitle="Materials" ctaLabel="More info" ctaLink="/" description="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price" featureImg={materialImage} mode="compact" compactFirstImage={materialCompoundFirst} compactSecondImage={materialCompoundSecond}/>

      <Testimonials />
    </Suspense>
  </div> );
}
 
export default Home;