import React from 'react';

const Card = ({ name, image, breed }) => {
  return (
    <div className='tc grow bg-light-gray br3 ns-pa1 ma2 dib bw2 shadow-5 '>
      <img alt='cats' src={image} width='370' height='300'  />
      <div>
        <h2>{name}</h2>
        <p className='ttc'>
          <span className="b">Breed:</span> {breed}
        </p>
      </div>
    </div>
  );
}

export default Card;
