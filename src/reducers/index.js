import { combineReducers } from 'redux'
import loggedInUser from './loggedInUser'
import users from './users'

export default combineReducers({
  loggedInUser,
  users,
})