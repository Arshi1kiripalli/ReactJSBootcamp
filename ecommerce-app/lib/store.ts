import { create } from 'zustand';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartStore = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(p => p.id !== id) })),
  clearCart: () => set({ cart: [] }),
}));