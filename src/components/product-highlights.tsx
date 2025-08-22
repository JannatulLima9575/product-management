import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart3, Shield, ShoppingCart, Users } from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Product Management',
    description:
      'Easily add, edit, and organize your product catalog with our intuitive interface.',
  },
  {
    icon: Users,
    title: 'User Authentication',
    description:
      'Secure login system with Google OAuth and credential-based authentication.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description:
      'Track product performance and gain insights with comprehensive analytics.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description:
      'Built with Next.js 15 and modern security practices to keep your data safe.',
  },
];

export function ProductHighlights() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose ProductManager?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your products efficiently, all in one
            powerful platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
