import React, { useState } from 'react';
import "./header.css"

const header = () => {

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Shan</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href='' className='nav__link'>
                <i className='uil uil- nav__icon'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    
  )
}

export default header