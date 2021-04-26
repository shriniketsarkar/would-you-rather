import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Question = (props) => {
  const { history, id, username, avatarURL, question} = props

  // This routes to the correct page based on if the question is already answered.
  const handleViewPoll = () => {
      history.push(`/questions/${id}`)
  }

  return (
    <div className='question-layout'>
      <div className='question-header'>
        <h5>{username} asks:</h5>
      </div>
      <div className='question-body'>
        <div className='img-wrapper'>
          <img
            src={avatarURL}
            className='avatar-img'
            alt='Author avatar' />
        </div>
        <div className='verticle-rule'></div>
        <div className='question-options'>
          <h4>Would you rather:</h4>
          <p>{question.optionOne.text} OR {question.optionTwo.text}</p>
          <button onClick={handleViewPoll}>View Poll</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, questions }, { id }) => {
  const question = questions[id]
  const user = users[question.author]

  return {
    id,
    username: user.name,
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))