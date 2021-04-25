import { RECEIVE_USERS, UPDATE_USER_ANSWER, ADD_USER_QUESTION } from '../actions/users'

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION:
      const { id, author } = action.question
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id])
        }
      }
    case UPDATE_USER_ANSWER:
      const { qid, authedUser, answer } = action.answer
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default:
      return state
  }
}

export default users;