import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import UserScore from './UserScore'

const LeaderBoard = (props) => {
  const history = useHistory()
  const { users, sortedKeys } = props

  // If user is logged out then redirect to Home page.
  useEffect(() => {
    if (!props.canAccessPage) {
      history.push('/')
    }
  }, [])


  return (
    <div className='leader-board-container'>
      <ul>
        {sortedKeys.map(({ key, value }) => {
          return (
            <li key={key}>
              <UserScore
                name={users[key].name}
                ansCount={Object.keys(users[key].answers).length}
                quesCount={users[key].questions.length}
                score={value}
                avatarURL={users[key].avatarURL}
              />
            </li>)
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users }) => {
  const userIdKeys = Object.keys(users)
  const usersWithScore = userIdKeys.map(key => {
    const user = users[key]
    return {
      key: key,
      value: Object.keys(user.answers).length + user.questions.length
    }
  })
  const sortedKeys = usersWithScore.sort((a, b) => b.value - a.value)
  return {
    canAccessPage: loggedInUser !== null,
    users,
    sortedKeys
  }
}

export default connect(mapStateToProps)(LeaderBoard)