
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OfferingsHero from '@/components/offerings/OfferingsHero';
import OfferingsIntro from '@/components/offerings/OfferingsIntro';
import ElectricalSection from '@/components/offerings/ElectricalSection';
import MechanicalSection from '@/components/offerings/MechanicalSection';
import WhyChooseSection from '@/components/offerings/WhyChooseSection';
import OfferingsCTA from '@/components/offerings/OfferingsCTA';

const OurOfferings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OfferingsHero />
      <OfferingsIntro />
      <ElectricalSection />
      <MechanicalSection />
      <WhyChooseSection />
      <OfferingsCTA />
      <Footer />
    </div>
  );
};

export default OurOfferings;
