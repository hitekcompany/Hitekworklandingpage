import { PricingSection } from '../components/PricingSection';
import { useSEOMeta } from '../hooks/useSEOMeta';

export function PricingPage() {
  useSEOMeta('pricing');
  return (
    <>
      <PricingSection />
    </>
  );
}
