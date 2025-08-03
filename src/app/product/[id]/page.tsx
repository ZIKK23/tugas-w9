import type { Metadata } from 'next';
import ProductView from '@/components/ProductView'; 

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface Props {
    params: { id: string };
}

async function getProduct(id: string): Promise<Product | null> {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch product');
    }
    return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const product = await getProduct(params.id);
    if (!product) {
        return { title: 'Product Not Found' };
    }
    return {
        title: product.title,
        description: product.description,
    };
}

export async function generateStaticParams() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products: Product[] = await res.json();
    return products.slice(0, 10).map((product) => ({
        id: product.id.toString(),
    }));
}



export default async function ProductDetailPage({ params }: Props) {
    const product = await getProduct(params.id);
    return <ProductView product={product} />;
}