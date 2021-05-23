import React, { useEffect, useState } from 'react';

const Sidebar = ({ categories }) => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const [first] = categories;
    first && setActive(first.category);
  }, [categories]);

  const scrollToSection = (category) => {
    setActive(category);
    document.getElementById(category).scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ul className='sidebar'>
      {categories.map(({ category, restaurantList }) =>
        <li key={category} onClick={() => scrollToSection(category)} className={active === category ? 'active' : ''}>
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
