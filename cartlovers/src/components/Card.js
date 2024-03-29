import React from 'react';

const Card = ({ name, image, breed }) => {
  return (
    <div className='tc grow bg-light-gray br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='cats' src={image} width='200' height='200'  />
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
