import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/lib/mock-data';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.image;
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
          {!product.inStock && (
            <div className="absolute top-2 right-2">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
          {product.inStock && (
            <div className="absolute top-2 right-2">
              <Badge variant="secondary">In Stock</Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-4">
        <div className="flex-1">
          <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm mb-3 line-clamp-2">
            {product.description}
          </CardDescription>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-primary">
              ${product.price}
            </span>
            <Badge variant="outline">{product.category}</Badge>
          </div>
        </div>
        <Link href={`/products/${product.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
