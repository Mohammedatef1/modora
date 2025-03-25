interface FeatureHighlightProps {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  ctaLabel: string;
  ctaLink: string;
  backgroundColor?: string;
}

const FeatureHighlight = ({ctaLabel, ctaLink, description, imgSrc, subtitle, title, backgroundColor} : FeatureHighlightProps) => {
  return (
    <div className="flex py-12 md:py-40 lg:py-60">
      <div className="w-full md:w-1/2">
        <img src={imgSrc} alt="Experience image" width={455} height={629} className="w-10/12 h-auto rounded-e-2xl"/>
      </div>
    </div>
  )
}

export default FeatureHighlight