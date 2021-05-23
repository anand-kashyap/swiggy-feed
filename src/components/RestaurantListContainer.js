import React from 'react'
import Restaurant from './Restaurant'

const RestaurantListContainer = ({ list }) => {
  return (
    <div className="restaurant-list-container">
      {list.map((restaurant, index) =>
        <div key={index}>
          <Restaurant {...restaurant}></Restaurant>
        </div>
      )}
    </div>
  )
}

export default RestaurantListContainer
