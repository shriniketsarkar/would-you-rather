import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Question = (props) => {

  // This routes to the correct page based on if the question is already answered. 
  const handleViewPoll = () => {
    if (props.answered) {
      props.history.push(`/poll-result/${props.id}`)
    } else {
      props.history.push(`/questions/${props.id}`)
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
            src={props.avatarURL}
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
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(Question))