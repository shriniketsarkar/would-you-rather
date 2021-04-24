import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const LeaderBoard = (props) => {
  const history = useHistory()

  useEffect(() => {
    if (!props.canAccessPage) {
      history.push('/')
    }
  })

  return (
    <div>
      LeaderBoard
    </div>
  )
}

const mapStateToProps = ({ loggedInUser }) => {
  return {
    canAccessPage: loggedInUser !== null
  }
}

export default connect(mapStateToProps)(LeaderBoard)