import { saveQuestion } from '../utils/dataAPI'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_QUESTION_ANSWER = 'UPDATE_QUESTION_ANSWER'


export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export const addQuestion = (question) => {
  return {
    type: ADD_QUESTION,
    question
  }
}

export const updateQuestionAnswer = (answer) => {
  return {
    type: UPDATE_QUESTION_ANSWER,
    answer
  }
}

export const handleAddQuestion = (question) => {
  return (dispatch) => {
    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
  }
}