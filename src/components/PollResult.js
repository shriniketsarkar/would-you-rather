import React from 'react'
import { connect } from 'react-redux'
import emptyAvatar from '../empty-avatar.png'
import ProgressBar from './ProgressBar'
import yourVote from '../your-vote.png'

const PollResult = (props) => {

  const yourVoteIndicator = (option) => {
    const display = (
      <div className='your-vote-img-wrapper'>
        <img
          src={yourVote}
          className='avatar-img'
          alt='Author avatar' />
      </div>)
    let shouldDisplay = false
    if (option === 'optionOne') {
      shouldDisplay = props.question.optionOne.votes.includes(props.loggedInUser)
    } else if (option === 'optionTwo') {
      shouldDisplay = props.question.optionTwo.votes.includes(props.loggedInUser)
    }
    return shouldDisplay ? display : null
  }
return (
  <div className='result-layout'>
    <div className='question-header'>
      <h5>Asked by {props.username}</h5>
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
        <h4>Results:</h4>
        <div className='poll-result-container'>
          <div className='option-container'>
            <div className='result-container'>
              <label>Would you rather {props.question.optionOne.text} ?</label>
              <ProgressBar completeStatus={50} />
              <span>1 out of 2 votes</span>
            </div>
            {yourVoteIndicator('optionOne')}
          </div>
          <div className='option-container'>
            <div className='result-container'>
              <label>Would you rather {props.question.optionTwo.text} ?</label>
              <ProgressBar completeStatus={50} />
              <span>1 out of 2 votes</span>
            </div>
            {yourVoteIndicator('optionTwo')}
          </div>
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
    id,
    loggedInUser,
    username: user.name,
    avatarURL: user.avatarURL,
    question
  }
}

export default connect(mapStateToProps)(PollResult)