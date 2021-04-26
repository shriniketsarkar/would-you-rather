import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { handlePollAnswerUpdate } from '../../actions/shared'
import PollResult from './PollResult'

const QuestionPoll = (props) => {
  const { isError, isAnswered, dispatch, history, loggedInUser, id } = props
  const { voteTotalCount, username, avatarURL, question } = props
  const [selectedOption, setSelectedOption] = useState('optionOne')

  const handleOptionChange = e => {
    setSelectedOption(e.target.value)
  }

  const handleQuestionAnswerSubmit = (e) => {
    e.preventDefault()
    const questionAnswer = {
      authedUser: loggedInUser,
      qid: id,
      answer: selectedOption
    }

    dispatch(handlePollAnswerUpdate(questionAnswer))
    history.push(`/questions/${id}`)
  }

  return (
    <div>
      {
        isError
          ?
          <Redirect
            to={{
              pathname: '/login',
              state: { referrer: '/404' }
            }}
          />
          :
          (
            isAnswered
              ?
              <PollResult
                voteTotalCount={voteTotalCount}
                id={id}
                loggedInUser={loggedInUser}
                username={username}
                avatarURL={avatarURL}
                question={question}
              />
              :
              <div className='question-body'>
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
                      <form className='question-poll-form' onSubmit={handleQuestionAnswerSubmit}>
                        <label>
                          <input
                            type='radio'
                            name='optionOne'
                            value='optionOne'
                            checked={selectedOption === 'optionOne'}
                            onChange={handleOptionChange}
                          />
                          {question.optionOne.text}
                        </label>
                        <label>
                          <input
                            type='radio'
                            name='optionTwo'
                            value='optionTwo'
                            checked={selectedOption === 'optionTwo'}
                            onChange={handleOptionChange}
                          />
                          {question.optionTwo.text}
                        </label>
                        <button type='submit'>Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
          )
      }
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users, questions }, props) => {
  if (!Object.keys(questions).length) {
    // This indicates that the user stumbled upon this url somehow and the store is not loaded
    return {
      isError: true
    }
  }
  const { id } = props.match.params
  const question = questions[id]
  const user = users[question.author]
  const isAnswered = question.optionOne.votes.includes(loggedInUser) ||
    question.optionTwo.votes.includes(loggedInUser)
  return {
    isAnswered,
    voteTotalCount: question.optionOne.votes.length + question.optionTwo.votes.length,
    id,
    loggedInUser,
    username: user.name,
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(QuestionPoll))