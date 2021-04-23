import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='navigation-layout'>
      <ul>
        <li>
          <NavLink to='/' exact className='nav-link'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/new-question' className='nav-link'>New Question</NavLink>
        </li>
        <li>
          <NavLink to='/leader-board' className='nav-link'>Leader Board</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation