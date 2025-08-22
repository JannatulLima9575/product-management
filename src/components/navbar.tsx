'use client';

import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 w-full bg-background border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            ProductManager
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>

            {session ? (
              <div className="flex items-center gap-4">
                <Link
                  href="/dashboard/add-product"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <Button
                  variant="outline"
                  onClick={() => signOut()}
                  className="text-sm"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link href="/login">
                <Button className="text-sm">Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
