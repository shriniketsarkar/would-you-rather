import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handlePollAnswerUpdate } from '../actions/shared'

const QuestionPoll = (props) => {

  const [selectedOption, setSelectedOption] = useState('optionOne')

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  const handleQuestionAnswerSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = props
    const questionAnswer = {
      authedUser: props.loggedInUser,
      qid: props.id,
      answer: selectedOption
    }

    dispatch(handlePollAnswerUpdate(questionAnswer))
    props.history.push(`/poll-result/${props.id}`)
  }

  return (
    <div className='question-body'>
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
            <form className='question-poll-form' onSubmit={handleQuestionAnswerSubmit}>
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
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users, questions }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  const user = users[question.author]

  return {
    loggedInUser,
    id,
    username: user.name,
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPoll))