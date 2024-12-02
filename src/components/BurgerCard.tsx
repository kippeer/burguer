import React from 'react';
import { Burger } from '../types';
import { Info } from 'lucide-react';

interface BurgerCardProps {
  burger: Burger;
  onAddToCart: (burger: Burger) => void;
}

export const BurgerCard: React.FC<BurgerCardProps> = ({ burger, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={burger.image} 
        alt={burger.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{burger.name}</h3>
        <p className="text-gray-600 mb-4">{burger.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-green-600">${burger.price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(burger)}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Info size={16} className="mr-1" />
          <span>{burger.ingredients.join(', ')}</span>
        </div>
      </div>
    </div>
  );
};