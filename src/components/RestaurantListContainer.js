import React, { forwardRef, useState } from 'react';
import Restaurant from './Restaurant';

const RestaurantListContainer = forwardRef(({ list, category }, ref) => {
  const showAll = category.endsWith('ALL') || list.length <= 6;

  const [tobeDisplayed, setTobeDisplayed] = useState(showAll ? list : list.slice(0, 5)),
    [remaining, setRemaining] = useState(list.length - tobeDisplayed.length);

  const loadMore = () => {
    if (remaining <= 6) {
      setTobeDisplayed(list);
      setRemaining(0);
      return
    }
    const newArr = list.slice(0, tobeDisplayed.length + 6);
    setTobeDisplayed(newArr);
    setRemaining(remaining - 5);
  };

  return (
    <section id={category} ref={ref}>
      <h2 className='cat-name'>{category}</h2>
      <div className='restaurant-list-container'>
        {tobeDisplayed.map((restaurant, index) =>
          <div key={index}>
            <Restaurant {...restaurant}></Restaurant>
          </div>
        )}
        {/* load more button */}
        {remaining > 0 &&
          <div className='load-more'>
            <button onClick={() => loadMore()}>+{remaining} More</button>
          </div>
        }
      </div>
    </section>

  )
})

export default RestaurantListContainer
