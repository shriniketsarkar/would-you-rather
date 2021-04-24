import { _getQuestions, _getUsers } from './_DATA.js'

export function getDataForInitialLoad () {
  return Promise.all([
    _getUsers(),
    _getQuestions()
  ]).then(([users, questions]) => ({
    users,
    questions
  }))
}