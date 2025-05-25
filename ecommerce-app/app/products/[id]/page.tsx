'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/lib/store';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const addToCart = useCartStore((s) => s.addToCart);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(data => setProduct(data.find((p: any) => p.id == id)));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <img src={product.image} className="w-full h-60 object-contain" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
      >Add to Cart</button>
    </div>
  );
}