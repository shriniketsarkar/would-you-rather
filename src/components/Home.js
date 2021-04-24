import React from 'react'
import { connect } from 'react-redux'
import { setLoggedInUser } from '../actions/loggedInUser'
import Login from './Login'

const Home = (props) => {
  const handleSignIn = (user) => {
    props.dispatch(setLoggedInUser(user))
  }
  return (
    <div>
      {
        props.canLogIn
          ? <Login
            availableUsers={props.users}
            handleSignIn={handleSignIn} />
          : 'Home Page'
      }
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users }) => {
  console.log(users)
  return {
    canLogIn: loggedInUser === null,
    users
  }
}

export default connect(mapStateToProps)(Home)