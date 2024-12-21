"use client"
import React from 'react';
import { CartProvider } from '../components/CartContext';
import { Header } from '../components/Header';
import { ProductList } from '../components/ProductList';
import { Cart } from '../components/Cart';

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-4">Products</h2>
              <ProductList />
            </div>
            <div className="md:w-1/3">
              <Cart />
            </div>
          </div>
        </main>
      </div>
    </CartProvider>
  );
}

