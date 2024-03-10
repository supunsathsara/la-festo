import { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ReviewSection } from '@/components/Reviews';
import { ServiceSection } from '@/components/Services';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import ItemSection from '@/components/ItemSection';


export default function Home() {
  
  return (
    <main className=''>
      <NavBar />
      <HeroSection />
      {/* <ItemSection /> */}
      <ReviewSection />
      <ServiceSection />
      <Footer />
    </main>
  );
}
