import React from 'react'

const Sidebar = ({ categories }) => {
  return (
    <ul className='sidebar'>
      {categories.map(({ category, restaurantList }) =>
        <li key={category}>
          <p className='cat-name'>
            {category}
          </p>
          <p className='restaurant-num'>{restaurantList.length} options</p>
        </li>
      )}
    </ul>
  )
}

export default Sidebar
