import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setLoggedInUser } from '../actions/loggedInUser'
import logo from '../assets/logo.png'

const Login = (props) => {
  const { users, dispatch } = props
  const history = useHistory()
  const userKeys = Object.keys(users)
  const [selectedOption, setSelectedOption] = useState(userKeys[0])

  // Setup initial selected option for drop box.
  useEffect(() => {
    if (userKeys.length !== 0 && !selectedOption) {
      setSelectedOption(userKeys[0])
    }
  }, [userKeys, selectedOption])

  const handleUserChange = (e) => {
    e.preventDefault()
    setSelectedOption(e.target.value)
  }

  const handleBtnClick = () => {
    dispatch(setLoggedInUser(selectedOption))
    console.log('Referrer:', props.location?.state?.referrer);
    if (props.location?.state?.referrer) {
      history.push(props.location.state.referrer)
    } else {
      history.push('/')
    }
  }

  return (
    <div className='login-container'>
      <div className='login-panel'>
        <div>
          <h3>Welcome to Would You Rather App!</h3>
          <p>Please sign in to continue</p>
          <hr />
        </div>
        <div>
          <img src={logo} className='app-logo' alt='logo' />
          <div>Sign in</div>
        </div>
        <div className='login-options'>
          <select name='select' value={selectedOption} onChange={handleUserChange}>
            {
              userKeys.map(key => {
                return (
                  <option key={`login-options-${key}`} value={key}>
                    {users[key].name}
                  </option>
                )
              })
            }
          </select>
          <button
            disabled={userKeys.length === 0}
            onClick={handleBtnClick}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)