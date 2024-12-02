import { Burger } from '../types';

export const burgers: Burger[] = [
  {
    id: '1',
    name: 'Cheeseburger Clássico',
    description: 'Hambúrguer suculento com queijo cheddar derretido, alface, tomate e nosso molho especial',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Hambúrguer de carne', 'Queijo cheddar', 'Alface', 'Tomate', 'Molho especial', 'Pão brioche']
  },
  {
    id: '2',
    name: 'Supremo BBQ com Bacon',
    description: 'Bacon defumado, anéis de cebola crocantes, molho BBQ e carne premium',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Hambúrguer de carne', 'Bacon', 'Anéis de cebola', 'Molho BBQ', 'Alface', 'Pão brioche']
  },
  {
    id: '3',
    name: 'Delícia Vegana',
    description: 'Hambúrguer à base de plantas com abacate fresco, cogumelos grelhados e maionese vegana',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Hambúrguer vegano', 'Abacate', 'Cogumelos', 'Maionese vegana', 'Alface', 'Pão integral']
  }
];
