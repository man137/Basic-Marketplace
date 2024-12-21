import React from 'react';
import { useCart } from '../components/CartContext';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {state.items.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <span>{item.name} (x{item.quantity})</span>
              <div>
                <span className="mr-2">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 text-right">
            <strong>Total: ${state.total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

