import React from 'react'
import { connect } from 'react-redux'

const Question = (props) => {
  return (
    <div>Question : {JSON.stringify(props)}</div>
  )
}

const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id]
  return {
    question
  }
}

export default connect(mapStateToProps)(Question)