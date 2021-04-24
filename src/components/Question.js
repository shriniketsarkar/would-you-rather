import React from 'react'
import { connect } from 'react-redux'
import emptyAvatar from '../empty-avatar.png'

const Question = (props) => {
  const handleViewPoll = () => {

  }

  return (
    <div className='question-layout'>
      <div className='question-header'>
        <h5>{props.username} asks:</h5>
      </div>
      <div className='question-body'>
        <div className='img-wrapper'><img src={emptyAvatar} className='avatar-img' alt='Author avatar' /></div>
        <div className='verticle-rule'></div>
        <div className='question-options'>
          <h4>Would you rather:</h4>
          <p>...{props.question.optionOne.text}</p>
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
    username: user.name,
    avatarURL: user.avatarURL,
    question
  }
}

export default connect(mapStateToProps)(Question)