import ArrowButton from "./ArrowButton";

interface FeatureHighlightProps {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
  ctaLabel: string;
  ctaLink: string;
  mode?: "standard" | "compact";
}

const FeatureHighlight = ({ctaLabel, ctaLink, description, imgSrc, subtitle, title, mode="standard"} : FeatureHighlightProps) => {
  return (
    <div className="flex flex-wrap gap-y-10 py-12 md:py-40 lg:py-60 lg:max-w-7xl lg:m-auto">
      <div className="w-full md:w-1/2">
        {mode === "standard"? (<img src={imgSrc} alt="Experience image" width={455} height={629} className="w-11/12 sm:w-10/12 h-auto rounded-e-2xl"/>) : 
        (<div>
          <img src="" width={450} height={629} alt="" />
        </div>) }
      </div>
      <div className={`w-full md:w-1/2 flex flex-col gap-y-5 p-4 sm:p-6 max-w-xl ${mode === "standard" ? 'ms:ps-20' : ''}`}>
        <h3 className="text-primary text-base md:text-lg font-semibold">{subtitle}</h3>
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
        <p className="text-base md:text-lg">{description}</p>
        <ArrowButton label={ctaLabel} link={ctaLink} className="mt-1"/>
      </div>
    </div> 
  )
}

export default FeatureHighlight