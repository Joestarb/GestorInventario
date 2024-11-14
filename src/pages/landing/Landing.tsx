import IntroSection from "./landingComponents/IntroSection";
import BenefitsSection from "./landingComponents/BenefitsSection";
import PlatformSection from "./landingComponents/PlatformSection";
import DesignSections from "./landingComponents/DesignSection";

const Landing = () => {
  return (
    <div className="bg-[#112B3C]"> 
      <IntroSection/>
      <BenefitsSection/>
      <PlatformSection/>
      <DesignSections/>
    </div>
  )
}

export default Landing
