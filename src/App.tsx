import React, { useState } from 'react';
import { Burger, CartItem } from './types';
import { burgers } from './data/burgers';
import { BurgerCard } from './components/BurgerCard';
import { Cart } from './components/Cart';
import { Menu } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (burger: Burger) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.burger.id === burger.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.burger.id === burger.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { burger, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (burgerId: string, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.burger.id === burgerId
          ? { ...item, quantity: newQuantity }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const handleRemoveItem = (burgerId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.burger.id !== burgerId));
  };

  const handleCheckout = () => {
    alert('Thank you for your order!');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="text-green-600 mr-2" size={24} />
              <h1 className="text-2xl font-bold text-gray-900">Burger Template</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {burgers.map(burger => (
                <BurgerCard
                  key={burger.id}
                  burger={burger}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;