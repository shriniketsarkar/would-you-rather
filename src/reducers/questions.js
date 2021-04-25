import { RECEIVE_QUESTIONS, ADD_QUESTION, UPDATE_QUESTION_ANSWER } from  '../actions/questions'

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      const { question } = action
      return {
        ...state,
        [question.id]: action.question
      }
    case UPDATE_QUESTION_ANSWER:
      const { qid, authedUser, answer } = action.answer
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}

export default questions