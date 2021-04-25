import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProgressBar from '../ProgressBar'
import yourVote from '../../assets/your-vote.png'

const PollResult = (props) => {
  const { isError, history } = props
  if (isError) {
    history.push('/404')
    return null
  }
  const noOfOptionOneVotes = props.question.optionOne.votes.length
  const noOfOptionTwoVotes = props.question.optionTwo.votes.length
  const optionOnePer = Math.floor((noOfOptionOneVotes / props.userCount) * 100)
  const optionTwoPer = Math.floor((noOfOptionTwoVotes / props.userCount) * 100)
  const yourVoteIndicator = (option) => {
    const display = (
      <div className='your-vote-img-wrapper'>
        <img
          src={yourVote}
          className='avatar-img'
          alt='You voted option' />
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
    <div className='question-body-poll-result'>
      <div className='img-wrapper'>
        <img
          src={props.avatarURL}
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
              <ProgressBar completeStatus={optionOnePer} />
              <span>{`${noOfOptionOneVotes} out of ${props.userCount} votes`}</span>
            </div>
            {yourVoteIndicator('optionOne')}
          </div>
          <div className='option-container'>
            <div className='result-container'>
              <label>Would you rather {props.question.optionTwo.text} ?</label>
              <ProgressBar completeStatus={optionTwoPer} />
              <span>{`${noOfOptionTwoVotes} out of ${props.userCount} votes`}</span>
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
    userCount: Object.keys(users).length,
    id,
    loggedInUser,
    username: user.name,
    avatarURL: user.avatarURL.length ? user.avatarURL : './empty-avatar.png',
    question
  }
}

export default withRouter(connect(mapStateToProps)(PollResult))