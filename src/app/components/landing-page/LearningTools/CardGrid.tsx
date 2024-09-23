// CardGrid.tsx
import React from 'react';
import Card from './Card';

interface CardGridProps {
  cards: { title: string; description: string }[];
}

const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardGrid;
