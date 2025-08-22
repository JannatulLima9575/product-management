import fs from 'fs/promises';
import path from 'path';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  features: string[];
  inStock: boolean;
  createdAt: string;
}

// Path to your JSON file inside the public folder
const DB_PATH = path.join(process.cwd(), 'src', 'data', 'products.json');

async function readProductsFile(): Promise<Product[]> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      await fs.writeFile(DB_PATH, JSON.stringify([], null, 2));
      return [];
    }
    console.error('Error reading products:', error);
    return [];
  }
}

async function writeProductsFile(products: Product[]): Promise<void> {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(products, null, 2));
  } catch (error) {
    console.error('Error writing products:', error);
    throw new Error('Failed to save products');
  }
}

export async function getAllProducts(): Promise<Product[]> {
  return await readProductsFile();
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getAllProducts();
  return products.find((product) => product.id === id) || null;
}

export async function addProduct(
  product: Omit<Product, 'id' | 'createdAt'>
): Promise<Product> {
  const products = await getAllProducts();

  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };

  products.push(newProduct);
  await writeProductsFile(products);

  return newProduct;
}

export async function searchProducts(
  query: string,
  category?: string
): Promise<Product[]> {
  const products = await getAllProducts();

  return products.filter((product) => {
    const matchesQuery =
      !query ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = !category || product.category === category;

    return matchesQuery && matchesCategory;
  });
}
