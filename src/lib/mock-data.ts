export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  features: string[];
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description:
      'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    image: '/premium-wireless-headphones.png',
    category: 'Electronics',
    inStock: true,
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Premium sound quality',
      'Comfortable design',
    ],
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    description:
      'Advanced fitness tracker with heart rate monitoring, GPS, and smartphone integration.',
    price: 199.99,
    image: 'static/images/fitness-tracker.png',
    category: 'Wearables',
    inStock: true,
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      '7-day battery life',
    ],
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    description:
      'Professional ergonomic office chair designed for comfort during long work sessions.',
    price: 449.99,
    image: '/ergonomic-office-chair.png',
    category: 'Furniture',
    inStock: false,
    features: [
      'Lumbar support',
      'Adjustable height',
      'Breathable mesh',
      '360-degree swivel',
    ],
  },
  {
    id: '4',
    name: 'Portable Bluetooth Speaker',
    description:
      'Compact and powerful Bluetooth speaker with waterproof design and rich sound.',
    price: 89.99,
    image: '/portable-bluetooth-speaker.png',
    category: 'Electronics',
    inStock: true,
    features: [
      'Waterproof design',
      '12-hour battery',
      '360-degree sound',
      'Compact size',
    ],
  },
  {
    id: '5',
    name: 'Professional Camera Lens',
    description:
      'High-performance camera lens for professional photography with superior optics.',
    price: 899.99,
    image: '/professional-camera-lens.png',
    category: 'Photography',
    inStock: true,
    features: [
      'Superior optics',
      'Weather sealed',
      'Fast autofocus',
      'Professional grade',
    ],
  },
  {
    id: '6',
    name: 'Smart Home Hub',
    description:
      'Central hub for controlling all your smart home devices with voice commands.',
    price: 149.99,
    image: '/smart-home-hub.png',
    category: 'Smart Home',
    inStock: true,
    features: [
      'Voice control',
      'Multi-device support',
      'Easy setup',
      'Secure connection',
    ],
  },
];
