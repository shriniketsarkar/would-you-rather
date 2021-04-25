import React from 'react'
import { connect } from 'react-redux'
import emptyAvatar from '../empty-avatar.png'
import { withRouter } from 'react-router-dom'

const Question = (props) => {
  const handleViewPoll = () => {
    if (props.answered) {
      props.history.push(`/poll-result/${props.id}`)
    } else {
      props.history.push(`/question-poll/${props.id}`)
    }
  }

  return (
    <div className='question-layout'>
      <div className='question-header'>
        <h5>{props.username} asks:</h5>
      </div>
      <div className='question-body'>
        <div className='img-wrapper'>
          <img
            src={emptyAvatar}
            className='avatar-img'
            alt='Author avatar' />
        </div>
        <div className='verticle-rule'></div>
        <div className='question-options'>
          <h4>Would you rather:</h4>
          <p>{props.question.optionOne.text} OR {props.question.optionTwo.text}</p>
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
    avatarURL: user.avatarURL,
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))