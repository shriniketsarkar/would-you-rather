import { _getUsers } from './_DATA.js'

export function getDataForInitialLoad () {
  return Promise.all([
    _getUsers()
  ]).then(([users]) => ({
    users
  }))
}