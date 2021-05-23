import React, { useEffect, useState } from 'react';
import RestaurantListContainer from './RestaurantListContainer';
import Sidebar from './Sidebar';

const FeedContainer = () => {
  const [catArr, setCatArr] = useState([]);

  useEffect(() => {
    fetch('https://cdn.adpushup.com/reactTask.json')
      .then(d => d.json())
      .then(setFeedData)
      .catch(console.error);
  }, []);

  const setFeedData = (categories) => {
    console.log('setFeedData -> catArr', categories);
    const onlyOnSwiggy = [], allRestaurants = [];

    categories.forEach(({ restaurantList }) => {
      restaurantList.forEach(restaurant => {
        allRestaurants.push(restaurant);
        if (restaurant.isExlusive) {
          onlyOnSwiggy.push(restaurant);
        }
      })
    });

    categories.push(
      { category: 'only on swiggy', restaurantList: onlyOnSwiggy },
      { category: 'SEE ALL', restaurantList: allRestaurants },
    )
    setCatArr(categories);
  };

  return (
    <main className='feed-container'>
      <Sidebar categories={catArr} />
      <div className='section-container'>
        {catArr.map(({ category, restaurantList }) =>
          <RestaurantListContainer key={category} list={restaurantList} category={category} />
        )}
      </div>
    </main>
  )
}

export default FeedContainer
