import React from 'react'
import { connect } from 'react-redux'

const UserScore = (props) => {

  return (
    <div className='user-score-container'>
      <div className='img-wrapper'>
        <img
          src={props.avatarURL}
          className='avatar-img'
          alt='Author avatar' />
      </div>
      <div className='verticle-rule'></div>
      <div className='user-score'>
        <h5>{props.name}</h5>
        <div className='user-score-result'>
          <div className='user-score-result-inner'>
            <div>Answered questions</div>
            <div>{props.ansCount}</div>
          </div>
          <hr />
          <div className='user-score-result-inner'>
            <div>Created questions</div>
            <div>{props.quesCount}</div>
          </div>
        </div>
      </div>
      <div className='verticle-rule'></div>
      <div className='score-card-container'>
        <div className='score-card'>
          <label>Score</label>
          <div className='score-value'>{props.ansCount + props.quesCount}</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users }) => {
  return {
    canAccessPage: loggedInUser !== null,
    avatarURL: users[loggedInUser].avatarURL.length ? users[loggedInUser].avatarURL : './empty-avatar.png'
  }
}

export default connect(mapStateToProps)(UserScore)