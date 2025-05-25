'use client';
import { useCartStore } from '@/lib/store';

export default function CheckoutPage() {
  const cart = useCartStore((s) => s.cart);
  const clearCart = useCartStore((s) => s.clearCart);

  const placeOrder = async () => {
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart })
    });
    const data = await res.json();
    alert(data.message);
    clearCart();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Review Your Order</h1>
      <ul className="space-y-2">
        {cart.map((item, i) => (
          <li key={i} className="border p-2 rounded">{item.title} - ${item.price}</li>
        ))}
      </ul>
      <button
        onClick={placeOrder}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded"
      >Place Order</button>
    </div>
  );
}