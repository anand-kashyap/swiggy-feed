import React, { useState } from 'react';
import Restaurant from './Restaurant';

const RestaurantListContainer = ({ list, category }) => {
  const [tobeDisplayed, setTobeDisplayed] = useState(category.endsWith('ALL') ? list : list.slice(0, 5));

  const remainingRestaurants = list.length - tobeDisplayed.length;

  return (
    <section id={category}>
      <h2 className='cat-name'>{category}</h2>
      <div className='restaurant-list-container'>
        {tobeDisplayed.map((restaurant, index) =>
          <div key={index}>
            <Restaurant {...restaurant}></Restaurant>
          </div>
        )}
        {/* load more button */}
        {remainingRestaurants > 0 &&
          <div className='load-more'>
            <button>+{remainingRestaurants} More</button>
          </div>
        }
      </div>
    </section>

  )
}

export default RestaurantListContainer
