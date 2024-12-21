import React from 'react';
import { useCart } from '../components/CartContext';

export const Header: React.FC = () => {
  const { state } = useCart();

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <div>
          <span className="mr-2">Cart: {itemCount} item(s)</span>
          <span>${state.total.toFixed(2)}</span>
        </div>
      </div>
    </header>
  );
};

