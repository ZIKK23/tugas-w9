'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

export default function CsrPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <p className="text-center text-xl">Loading bosh...</p>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-center">Produk</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link href={`/product/${product.id}`} key={product.id}>
                        <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col">
                            <div className="relative w-full h-48 mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className="rounded-t-lg"
                                />
                            </div>
                            <h2 className="text-lg font-semibold flex-grow">{product.title}</h2>
                            <p className="text-xl font-bold mt-2">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}