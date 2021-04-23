import { getDataForInitialLoad } from '../utils/dataAPI'
import { receiveUsers } from '../actions/users'
import { setLoggedInUser }  from '../actions/loggedInUser'

const initialUser = 'tylermcginnis'

// Initial action to handle :
// 1. setting of a hardcoded user
// 2. setting of the list of users fetched from DATA
// on the redux store.
export const handleDataForInitialLoad = () => {
  return (dispatch) => {
    return getDataForInitialLoad()
    .then(({ users }) => {
      dispatch(receiveUsers(users))
      dispatch(setLoggedInUser(initialUser))
    })
  }
}