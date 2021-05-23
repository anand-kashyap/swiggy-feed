import React from 'react';
import Star from './Star';

const Restaurant = ({ name, delivery_time, food_types, price_for_two, ratings, imgUrl }) => {

  return (
    <div className='res-card'>
      <img width='260' height='160' src={imgUrl} alt='restaurant-dish' />
      <p className='res-name'>{name}</p>
      {food_types && <p className='res-text'>{food_types.join(', ')}</p>}
      <div className='res-text res-stats'>
        <div className={`res-rating ${!ratings ? 'no-rating' : ''}`}>
          <Star isWhite={!!ratings} />
          <span>
            {ratings || '-'}
          </span>
        </div>
        <div className='dot-separator'>.</div>
        <p className='res-delivery-time'>{delivery_time}</p>
        <div className='dot-separator'>.</div>
        <p className='res-price'>₹{price_for_two} for two</p>
      </div>
      <div className='quick-view'>
        quick view
      </div>
    </div>
  )
}

export default Restaurant
