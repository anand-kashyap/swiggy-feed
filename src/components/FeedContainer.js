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


  const imgIds = '1484723091739-30a097e8f929,1521305916504-4a1121188589,1511690743698-d9d85f2fbf38,1506084868230-bb9d95c24759,1429554513019-6c61c19ffb7e,1482049016688-2d3e1b311543,1496412705862-e0088f16f791,1432139509613-5c4255815697,1478145046317-39f10e56b5e9,1484980972926-edee96e0960d,1504544750208-dc0358e63f7f'.split(',');

  const getImgUrl = () => {
    const id = imgIds[Math.floor(Math.random() * imgIds.length)];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=254&h=160&q=60`
  }

  const setFeedData = (categories) => {
    console.log('setFeedData -> catArr', categories);
    const onlyOnSwiggy = [], allRestaurants = [];

    categories.forEach(({ restaurantList }, cindex) => {
      restaurantList.forEach((restaurant, rIndex) => {
        restaurant.imgUrl = getImgUrl();
        allRestaurants.push(restaurant);
        if (restaurant.isExlusive) {
          onlyOnSwiggy.push(restaurant);
        }
        categories[cindex].restaurantList[rIndex] = restaurant;
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
