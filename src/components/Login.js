import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const Login = (props) => {
  const { availableUsers } = props
  const userKeys = Object.keys(availableUsers)
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
    props.handleSignIn(selectedOption)
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
                    {availableUsers[key].name}
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

export default Login