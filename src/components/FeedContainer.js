import React, { useEffect, useRef, useState } from 'react';
import { getImgUrl } from '../utils';
import RestaurantListContainer from './RestaurantListContainer';
import Sidebar from './Sidebar';

const FeedContainer = () => {
  const sectionRefs = useRef([]);
  const [catArr, setCatArr] = useState([]),
    [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('https://cdn.adpushup.com/reactTask.json')
      .then(d => d.json())
      .then(setFeedData)
      .catch(console.error);
  }, []);

  const closestNumIndex = (needle, arr) => {
    let min = Math.min();
    let closestIndex = 0;
    for (let i = 0; i < arr.length; i++) {
      let absVal = Math.abs(needle - arr[i])
      if (min > absVal) {
        min = absVal;
        closestIndex = i;
      }
    }
    return closestIndex;
  }

  useEffect(() => {
    const setActiveSection = () => {
      const sectionOffsets = sectionRefs.current.map(s => s.offsetTop),
        index = closestNumIndex(window.scrollY, sectionOffsets);

      setActiveIndex(index);
      // const section = sectionRefs.current[index];
      // console.log('near', section);
    };

    const throttle = (fn, delay) => {
      let flag = true;
      return function (...args) {
        if (flag) {
          fn.apply(this, args);
          flag = false;
          setTimeout(() => {
            flag = true
          }, delay);
        }
      }
    };

    const scroll = throttle(setActiveSection, 100);

    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [sectionRefs]);


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
    <main className='feed-container' >
      <Sidebar categories={catArr} activeIndex={activeIndex} />
      <div className='section-container' >
        {catArr.map(({ category, restaurantList }, i) =>
          <RestaurantListContainer ref={r => {
            sectionRefs.current[i] = r;
          }} key={category} list={restaurantList} category={category} />
        )}
      </div>
    </main>
  )
}

export default FeedContainer
