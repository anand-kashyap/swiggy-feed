import React from 'react';
import Star from './Star';

const Restaurant = ({ name, delivery_time, food_types, price_for_two, ratings }) => {
  const imgIds = '1484723091739-30a097e8f929,1521305916504-4a1121188589,1511690743698-d9d85f2fbf38,1506084868230-bb9d95c24759,1429554513019-6c61c19ffb7e,1482049016688-2d3e1b311543,1496412705862-e0088f16f791,1432139509613-5c4255815697,1478145046317-39f10e56b5e9,1484980972926-edee96e0960d,1504544750208-dc0358e63f7f'.split(',');

  const getImgUrl = () => {
    const id = imgIds[Math.floor(Math.random() * imgIds.length)];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=254&h=160&q=60`
  }

  return (
    <div className='res-card'>
      <img width='260' height='160' src={getImgUrl()} alt="restaurant-dish" />
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
