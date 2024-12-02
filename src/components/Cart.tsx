import React from 'react';
import { CartItem } from '../types';
import { ShoppingCart, Trash2 } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}) => {
  const total = items.reduce((sum, item) => sum + (item.burger.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center text-gray-500">
          <ShoppingCart size={48} className="mb-2" />
          <p>Seu carrinho está vazio</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Carrinho</h2>
      {items.map((item) => (
        <div key={item.burger.id} className="flex items-center justify-between py-4 border-b">
          <div className="flex-1">
            <h3 className="font-semibold">{item.burger.name}</h3>
            <p className="text-gray-600">R${item.burger.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <button
                className="px-2 py-1 bg-gray-100 rounded-l"
                onClick={() => onUpdateQuantity(item.burger.id, Math.max(0, item.quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-1 bg-gray-100">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-100 rounded-r"
                onClick={() => onUpdateQuantity(item.burger.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => onRemoveItem(item.burger.id)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Total:</span>
          <span className="text-xl font-bold text-green-600">R${total.toFixed(2)}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
