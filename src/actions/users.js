export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const updateUserAnswer = (answer) => {
  return {
    type: UPDATE_USER_ANSWER,
    answer
  }
}

export const addUserQuestion = (question) => {
  return {
    type: ADD_USER_QUESTION,
    question
  }
}