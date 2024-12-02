export interface Burger {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  ingredients: string[];
}

export interface CartItem {
  burger: Burger;
  quantity: number;
}

export interface OrderSummary {
  items: CartItem[];
  total: number;
}