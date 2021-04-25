import { getDataForInitialLoad, saveQuestionAnswer, saveQuestion } from '../utils/dataAPI'
import { receiveUsers, updateUserAnswer, addUserQuestion } from './users'
import { receiveQuestions, updateQuestionAnswer, addQuestion } from './questions'

// Get data for Users andd Questions from DATA Store
export const handleDataForInitialLoad = () => {
  return (dispatch) => {
    return getDataForInitialLoad()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users))
      dispatch(receiveQuestions(questions))
    })
  }
}

// Add new Question data to Users andd Questions
export const handleAddQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
      })
  }
}

// Add question's answer data to Users and Questions
export const handlePollAnswerUpdate = (answer) => {
  return (dispatch) => {
    return saveQuestionAnswer(answer)
    .then(() => {
      dispatch(updateQuestionAnswer(answer))
      dispatch(updateUserAnswer(answer))
    })
  }
}