import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeLoggedInUser } from '../actions/loggedInUser'

const Navigation = (props) => {
  const handleLogOut = () => {
    props.dispatch(removeLoggedInUser())
  }

  return (
    <nav className='navigation-layout'>
      <ul>
        <li>
          <NavLink to='/' exact>Home</NavLink>
        </li>
        <li>
          <NavLink to='/new-question'>New Question</NavLink>
        </li>
        <li>
          <NavLink to='/leader-board'>Leader Board</NavLink>
        </li>
        <li className='login-items'>
          <div>{props.userName}</div>
          {
            props.canLogOut
              ? <NavLink
                to='/'
                onClick={handleLogOut}
                className='btn-layout'>Logout</NavLink>
              : null
          }
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = ({ loggedInUser, users }) => {
  const userName = loggedInUser === null ? '' : `Hello ${users[loggedInUser].name}`
  return {
    canLogOut: loggedInUser != null,
    userName
  }
}

export default connect(mapStateToProps)(Navigation)