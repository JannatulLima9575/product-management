import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-100 text-foreground py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-xl font-bold text-primary mb-4">ProductManager</h3>
        <p className="text-foreground mb-4">
          The complete solution for modern product management. Built with Next.js 15.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-primary transition-colors">
              Login
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-4">Legal</h4>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 mt-8 pt-8 text-center">
      <p className="text-foreground">
        © 2025 ProductManager. Built with Next.js 15.
      </p>
    </div>
  </div>
</footer>

  );
}
