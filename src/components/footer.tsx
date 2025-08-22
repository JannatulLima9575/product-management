import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-muted-foreground text-muted py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-primary-foreground mb-4">
              ProductManager
            </h3>
            <p className="text-muted mb-4">
              The complete solution for modern product management. Built with
              Next.js 15 and designed for scalability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="text-muted">
            © 2025 ProductManager. Built with Next.js 15 and v0.
          </p>
        </div>
      </div>
    </footer>
  );
}
