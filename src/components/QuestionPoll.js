import React, { useState } from 'react'
import { connect } from 'react-redux'
import emptyAvatar from '../empty-avatar.png'
import { withRouter } from 'react-router-dom'

const QuestionPoll = (props) => {

  const [selectedOption, setSelectedOption] = useState('optionOne')

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  const handleSubmitPoll = () => {
    // TODO: handle submit and save to store.
    // TODO: route to results page instead of home.
    props.history.push('/')
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
          <form className='question-poll-form' onSubmit={handleSubmitPoll}>
            <label>
              <input
                type='radio'
                name='optionOne'
                value='optionOne'
                checked={selectedOption === 'optionOne'}
                onChange={handleOptionChange}
              />
              {props.question.optionOne.text}
            </label>
            <label>
              <input
                type='radio'
                name='optionTwo'
                value='optionTwo'
                checked={selectedOption === 'optionTwo'}
                onChange={handleOptionChange}
              />
              {props.question.optionTwo.text}
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  const user = users[question.author]

  return {
    id,
    username: user.name,
    avatarURL: user.avatarURL,
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPoll))