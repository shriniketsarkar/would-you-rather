export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER'
export const REMOVE_LOGGEDIN_USER = 'REMOVE_LOGGEDIN_USER'

export const setLoggedInUser = (id) => {
  return {
    type: SET_LOGGEDIN_USER,
    id
  }
}

export const removeLoggedInUser = () => {
  return {
    type: REMOVE_LOGGEDIN_USER
  }
}