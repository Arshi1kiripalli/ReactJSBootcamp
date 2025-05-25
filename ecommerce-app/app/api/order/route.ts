import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const order = await req.json();
  console.log('Order placed:', order);
  return NextResponse.json({ message: 'Order received' });
}