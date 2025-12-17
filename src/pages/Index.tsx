import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesAndContent from '@/components/ServicesAndContent';
import BookingSection from '@/components/BookingSection';
import ContactFooter from '@/components/ContactFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesAndContent />
      <BookingSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
