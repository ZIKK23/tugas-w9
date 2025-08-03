'use client'; 

import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductViewProps {
    product: Product | null;
}

export default function ProductView({ product }: ProductViewProps) {
    if (!product) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">404 - Product Not Found</h1>
                <p>Maaf, produk yang Anda cari tidak ada.</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative w-full h-96">
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="rounded-lg"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                    <p className="text-lg text-gray-600 mb-4 capitalize">{product.category}</p>
                    <p className="text-gray-800 mb-4">{product.description}</p>
                    <p className="text-3xl font-extrabold text-blue-600">${product.price}</p>
                </div>
            </div>
        </div>
    );
}