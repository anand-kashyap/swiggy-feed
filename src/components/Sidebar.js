import React from 'react';

const Sidebar = ({ categories, activeIndex }) => {

  const scrollToSection = (category) => {
    document.getElementById(category).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ul className='sidebar'>
      {categories.map(({ category, restaurantList }, i) =>
        <li key={category} onClick={() => scrollToSection(category)} className={activeIndex === i ? 'active' : ''}>
          <p className='cat-name'>
            {category}
          </p>
          <p className='restaurant-num'>{restaurantList.length} {category.toLowerCase().endsWith('all') ? 'restaurants' : 'options'}</p>
        </li>
      )}
    </ul>
  )
}

export default Sidebar
