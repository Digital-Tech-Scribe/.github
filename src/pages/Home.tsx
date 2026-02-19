import HeroSection from '../../components/HeroSection';
import ServicesSection from '../../components/ServicesSection';
import AboutSection from '../../components/AboutSection';
import HowItWorksSection from '../../components/HowItWorksSection';
import SocialProofSection from '../../components/SocialProofSection';
import CTABanner from '../../components/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <HowItWorksSection />
      <SocialProofSection />
      <CTABanner />
    </>
  );
}
