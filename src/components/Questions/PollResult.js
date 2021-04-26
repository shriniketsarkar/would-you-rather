import React from 'react'
import ProgressBar from '../ProgressBar'
import yourVote from '../../assets/your-vote.png'

const PollResult = (props) => {
  const { voteTotalCount, question, loggedInUser, username, avatarURL } = props

  const noOfOptionOneVotes = question.optionOne.votes.length
  const noOfOptionTwoVotes = question.optionTwo.votes.length
  const optionOnePer = Math.floor((noOfOptionOneVotes / voteTotalCount) * 100)
  const optionTwoPer = Math.floor((noOfOptionTwoVotes / voteTotalCount) * 100)
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
      shouldDisplay = question.optionOne.votes.includes(loggedInUser)
    } else if (option === 'optionTwo') {
      shouldDisplay = question.optionTwo.votes.includes(loggedInUser)
    }
    return shouldDisplay ? display : null
  }


  return (
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
  )
}

export default PollResult