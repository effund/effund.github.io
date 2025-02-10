
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Timeline } from '@/components/Timeline';
import { Content } from '@/components/Content';
import { Forms } from '@/components/Forms';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Timeline />
      <Content />
      <Forms />
      <Footer />
    </div>
  );
};

export default Index;
