'use client';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function CartPage() {
  const cart = useCartStore((s) => s.cart);
  const removeFromCart = useCartStore((s) => s.removeFromCart);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <div className="space-y-4">
          {cart.map((p, i) => (
            <div key={i} className="border p-4 rounded-lg flex justify-between items-center">
              <span>{p.title} - ${p.price}</span>
              <button onClick={() => removeFromCart(p.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <Link href="/checkout" className="inline-block bg-green-600 text-white px-4 py-2 mt-4 rounded">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
}