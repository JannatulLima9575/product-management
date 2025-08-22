import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Manage Your Products with Confidence
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Streamline your product management workflow with our powerful,
          intuitive platform designed for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Get Started
            </Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
