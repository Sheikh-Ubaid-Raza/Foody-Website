import Image from 'next/image';
import React from 'react';

export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: 'Cheeseburger',
      description: 'A juicy beef patty with melted cheese, lettuce, and tomato.',
      price: '$5.99',
      image: '/cheese-burger.jpeg',
    },
    {
      id: 2,
      name: 'Chicken Nuggets',
      description: 'Crispy chicken nuggets served with a dipping sauce.',
      price: '$4.49',
      image: '/chicken-nuggets.jpg',
    },
    {
      id: 3,
      name: 'French Fries',
      description: 'Golden crispy fries seasoned with salt.',
      price: '$2.99',
      image: '/french-fries.jpg',
    },
    {
      id: 4,
      name: 'Milkshake',
      description: 'A thick and creamy milkshake in vanilla, chocolate, or strawberry.',
      price: '$3.99',
      image: '/milkshake.jpeg',
    },
    {
      id: 5,
      name: 'Cold Drinks',
      description: 'A variety of cold drinks like sodas and iced tea.',
      price: '$1.99',
      image: '/coldrinks.jpeg',
    },
    {
      id: 6,
      name: 'Pizza',
      description: 'Classic Margherita pizza with mozzarella, tomato sauce, and basil.',
      price: '$8.99',
      image: '/pizza.jpeg',
    },
    {
      id: 7,
      name: 'Cheese Roll',
      description: 'Soft rolls stuffed with melted cheese and herbs.',
      price: '$4.99',
      image: '/rolls.jpg',
    },
    {
      id: 8,
      name: 'Sandwich',
      description: 'A delicious sandwich with grilled chicken, lettuce, and mayo.',
      price: '$6.49',
      image: '/sandwich.jpeg',
    },
  ];

  return (
    <section id='menu' className="menu">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <Image className="menu-item-image" src={item.image} alt={item.name} width={300} height={300} />
            <div className="menu-item-details">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className='menuButton'>view more</button>
    </section>
  );
}
