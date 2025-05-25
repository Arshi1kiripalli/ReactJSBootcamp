'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <main className="p-6 grid grid-cols-3 gap-4">
      {products.map((p: any) => (
        <div key={p.id} className="border p-4 rounded-xl shadow-md">
          <img src={p.image} alt={p.title} className="h-40 object-contain mx-auto" />
          <h2 className="text-xl font-bold mt-2">{p.title}</h2>
          <p className="text-lg">${p.price}</p>
          <Link href={`/products/${p.id}`} className="text-blue-500 mt-2 inline-block">View</Link>
        </div>
      ))}
    </main>
  );
}