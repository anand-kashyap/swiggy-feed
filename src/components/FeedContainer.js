import React, { useEffect, useState } from 'react';
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
    setCatArr(categories);
  };

  return (
    <main className='feed-container'>
      <Sidebar categories={catArr} />
      <div className='section-container'>
        {catArr.map(({ category, restaurantList }) =>

          <section id={category} key={category}>
            <h2 className='cat-name'>{category}</h2>

          </section>
        )}
      </div>
    </main>
  )
}

export default FeedContainer
