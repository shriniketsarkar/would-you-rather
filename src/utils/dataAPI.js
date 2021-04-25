import { _getQuestions, _getUsers, _saveQuestion } from './_DATA.js'

export function getDataForInitialLoad () {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}

export function saveQuestion (question) {
  return _saveQuestion(question)
}