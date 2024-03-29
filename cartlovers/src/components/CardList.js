import React from 'react';
import Card from './Card';

const CardList = ({ cats }) => {
  return (
    <div>
      {
        cats.map((cat, i) => {
          return (
            <Card
              key={i}
              id={cat.id}
              name={cat.name}
              email={cat.email}
              image={cat.image}
              breed={cat.breed}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;