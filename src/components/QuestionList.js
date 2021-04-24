import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

const QuestionList = (props) => {
  const questionKeys = Object.keys(props.questions)
  const ansKeys = Object.keys(props.userAns)
  let filteredKeys = undefined
  if (props.answered) {
    filteredKeys = ansKeys
  } else {
    filteredKeys = questionKeys
      .filter(ques => !ansKeys.includes(ques))
      .concat(ansKeys.filter(ques => !questionKeys.includes(ques)))
  }

  return (
    <div>
      <ul>
        {filteredKeys.map((ques) => (
          <li key={ques}>
            <Question id={props.questions[ques].id} />
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users, questions }, props) => {
  const user = users[loggedInUser]
  const userAns = user.answers
  const userQues = user.questions
  return {
    loggedInUser,
    userAns,
    userQues,
    questions
  }
}

export default connect(mapStateToProps)(QuestionList)