import { getDataForInitialLoad, saveQuestionAnswer } from '../utils/dataAPI'
import { receiveUsers, updateUserAnswer } from './users'
import { receiveQuestions, updateQuestionAnswer } from './questions'

export const handleDataForInitialLoad = () => {
  return (dispatch) => {
    return getDataForInitialLoad()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
  }
}

export const handlePollAnswerUpdate = (answer) => {
  return (dispatch) => {
    return saveQuestionAnswer(answer)
    .then(() => {
      dispatch(updateQuestionAnswer(answer))
      dispatch(updateUserAnswer(answer))
    })
  }
}