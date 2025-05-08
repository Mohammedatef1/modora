import ArrowButton from "./ArrowButton";

type FeatureHighlightProps = {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
} & (StandardModeType | CompoundModeType)

type StandardModeType = { 
  mode: "standard"; 
  featureImg: string; 
}

type CompoundModeType = { 
  mode: "compact"; 
  featureImg: string; 
  compactFirstImage: string; 
  compactSecondImage: string; 
}

const FeatureHighlight = (props : FeatureHighlightProps) => {
  const {ctaLabel, ctaLink, description, featureImg, subtitle, title, mode} = props

  return (
    <div className={`flex flex-wrap gap-y-5 ${mode === "compact" ? 'flex-row-reverse items-center py-10 md:py-20 lg:py-30' : 'py-10 md:py-30 lg:py-40'}`}>
      <div className="w-full md:w-1/2">
        {mode === "standard"? 
        featureImg && (<img loading="lazy" src={featureImg} alt="Experience image" width={455} height={629} className="w-11/12 sm:w-10/12 h-auto rounded-e-2xl shadow-lg"/>) 
        : 
        (<div className="grid grid-cols-10 gap-x-4 md:gap-x-6 lg:gap-x-10 items-center md:max-w-2xl">
          <div className="col-span-4 flex flex-col gap-y-4 md:gap-y-10 overflow-hidden">
            <img loading="lazy" src={props.compactFirstImage} className="w-full aspect-square object-cover rounded-2xl shadow-md" alt="" />
            <img loading="lazy" src={props.compactSecondImage} className="w-full aspect-[1/1.42] object-cover rounded-2xl shadow-md" alt="" />
          </div>
          <div className="col-span-6 -me-4">
            <img loading="lazy" src={featureImg} width={450} height={629} className="w-full h-auto rounded-2xl shadow-lg" alt="" />
          </div>
        </div>) }
      </div>
      <div className={`w-full md:w-1/2 sm:p-6 ${mode === "compact" ? 'md:ps-20' : ''}`}>
        <div className="flex flex-col gap-y-3 md:gap-y-5 p-4 max-w-xl">
          <h3 className="text-primary text-base md:text-lg font-semibold uppercase">{subtitle}</h3>
          <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>
          <p className="text-base md:text-lg">{description}</p>
          <ArrowButton label={ctaLabel} link={ctaLink} className="mt-1"/>
        </div>
      </div>
    </div> 
  )
}

export default FeatureHighlight