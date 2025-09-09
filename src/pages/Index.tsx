
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TrackRecordSection from '@/components/TrackRecordSection';
import CredentialsSection from '@/components/CredentialsSection';
import ContactSection from '@/components/ContactSection';
import SafetyBanner from '@/components/SafetyBanner';
import Footer from '@/components/Footer';
import ContactWidget from '@/components/ContactWidget';


const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        <SafetyBanner />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <TrackRecordSection />
          <CredentialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <ContactWidget />
        
      </div>
    </ThemeProvider>
  );
};

export default Index;
