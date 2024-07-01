import React from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className='listItem'>
          <img src="./assets/react/home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/profile" className='listItem'>
          <img src="./assets/react/profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>
      {/* <div className="item">
        <span className="title">LISTS</span>
        <Link to="/users" className='listItem'>
          <img src="./assets/react/user.svg" alt="" />
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to="/products" className='listItem'>
          <img src="./assets/react/products.svg" alt="" />
          <span className="listItemTitle">Products</span>
        </Link>
        <Link to="/orders" className='listItem'>
          <img src="./assets/react/user.svg" alt="" />
          <span className="listItemTitle">Orders</span>
        </Link>
        <Link to="/posts" className='listItem'>
          <img src="./assets/react/products.svg" alt="" />
          <span className="listItemTitle">Posts</span>
        </Link>
      </div> */}
    </div>
  )
}

export default Menu