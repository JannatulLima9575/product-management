import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar';
import { ProductHighlights } from '@/components/product-highlights';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ProductHighlights />
      </main>
      <Footer />
    </div>
  );
}
