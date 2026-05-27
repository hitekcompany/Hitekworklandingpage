import { HeroSection } from '../components/HeroSection';
import { PillarsSection } from '../components/PillarsSection';
import { BottomCTASection } from '../components/BottomCTASection';
import { useSEOMeta } from '../hooks/useSEOMeta';

export function HomePage() {
  useSEOMeta('home');
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <BottomCTASection />
    </>
  );
}
