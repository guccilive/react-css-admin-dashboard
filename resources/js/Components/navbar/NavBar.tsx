import React from 'react';
import './navbar.scss';

function NavBar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="./assets/react/logo.svg" alt="" />
        <span>Livreson LTC</span>
      </div>
      <div className="icons">
        <img src="./assets/react/search.svg" alt="" className="icon" />
        <img src="./assets/react/app.svg" alt="" className="icon" />
        <img src="./assets/react/expnad.svg" alt="" className="icon" />
        <div className="notification">
          <img src="./assets/react/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="" />
          <span>Heritier Mashini</span>
        </div>
        <img src="./assets/react/settings.svg" alt="" className="icon" />
      </div>
    </div>
  )
}

export default NavBar