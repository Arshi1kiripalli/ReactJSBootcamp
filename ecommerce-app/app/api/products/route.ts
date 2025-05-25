import { NextResponse } from 'next/server';

const products = [
  { id: 1, title: 'Laptop', price: 999, image: '/laptop.png' },
  { id: 2, title: 'Phone', price: 499, image: '/phone.png' },
  { id: 3, title: 'Headphones', price: 199, image: '/headphones.png' }
];

export async function GET() {
  return NextResponse.json(products);
}