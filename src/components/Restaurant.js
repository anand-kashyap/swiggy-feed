import React from 'react'

const Restaurant = ({ name, delivery_time, food_types, price_for_two, ratings }) => {
  return (
    <div className='res-card'>
      <img width='260' height='160' src="https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=254&h=160&q=60" alt="restaurant-dish" />
      <p className='res-name'>{name}</p>
      {food_types && <p className='res-text'>{food_types.join(', ')}</p>}
      <div className='res-text res-stats'>
        <div className='res-rating'>
          {ratings || '-'}
        </div>
        <div>.</div>
        <p className='res-delivery-time'>{delivery_time}</p>
        <div>.</div>
        <p className='res-price'>₹{price_for_two} for two</p>
      </div>
      <div className='quick-view'>
        quick view
      </div>
    </div>
  )
}

export default Restaurant
