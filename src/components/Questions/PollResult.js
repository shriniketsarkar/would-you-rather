import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import ProgressBar from '../ProgressBar'
import yourVote from '../../assets/your-vote.png'

const PollResult = (props) => {
  const { isError, voteTotalCount, question, loggedInUser, username, avatarURL } = props
  let optionOnePer, optionTwoPer, yourVoteIndicator = undefined
  let noOfOptionOneVotes, noOfOptionTwoVotes = undefined
  if(!isError) {
    noOfOptionOneVotes = question.optionOne.votes.length
    noOfOptionTwoVotes = question.optionTwo.votes.length
    optionOnePer = Math.floor((noOfOptionOneVotes / voteTotalCount) * 100)
    optionTwoPer = Math.floor((noOfOptionTwoVotes / voteTotalCount) * 100)
    yourVoteIndicator = (option) => {
      const display = (
        <div className='your-vote-img-wrapper'>
          <img
            src={yourVote}
            className='avatar-img'
            alt='You voted option' />
        </div>)
      let shouldDisplay = false
      if (option === 'optionOne') {
        shouldDisplay = question.optionOne.votes.includes(loggedInUser)
      } else if (option === 'optionTwo') {
        shouldDisplay = question.optionTwo.votes.includes(loggedInUser)
      }
      return shouldDisplay ? display : null
    }
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
          <div className='result-layout'>
            <div className='question-header'>
              <h5>Asked by {username}</h5>
            </div>
            <div className='question-body-poll-result'>
              <div className='img-wrapper'>
                <img
                  src={avatarURL}
                  className='avatar-img'
                  alt='Author avatar' />
              </div>
              <div className='verticle-rule'></div>
              <div className='question-options'>
                <h4>Results:</h4>
                <div className='poll-result-container'>
                  <div className='option-container'>
                    <div className='result-container'>
                      <label>Would you rather {question.optionOne.text} ?</label>
                      <ProgressBar completeStatus={optionOnePer} />
                      <span>{`${noOfOptionOneVotes} out of ${voteTotalCount} votes`}</span>
                    </div>
                    {yourVoteIndicator('optionOne')}
                  </div>
                  <div className='option-container'>
                    <div className='result-container'>
                      <label>Would you rather {question.optionTwo.text} ?</label>
                      <ProgressBar completeStatus={optionTwoPer} />
                      <span>{`${noOfOptionTwoVotes} out of ${voteTotalCount} votes`}</span>
                    </div>
                    {yourVoteIndicator('optionTwo')}
                  </div>
                </div>
              </div>
            </div>
          </div>
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

  return {
    voteTotalCount: question.optionOne.votes.length + question.optionTwo.votes.length,
    id,
    loggedInUser,
    username: user.name,
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(PollResult))