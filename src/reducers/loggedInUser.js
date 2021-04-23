import { SET_LOGGEDIN_USER } from '../actions/loggedInUser'

const loggedInUser = (state = null, action) => {
  switch(action.type) {
    case SET_LOGGEDIN_USER :
      return action.id
    default :
      return state
  }
}

export default loggedInUser;