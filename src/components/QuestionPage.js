import React from 'react'
import { connect } from 'react-redux'
import Question from './Question'

const QuestionPage = (props) => {

  const questionsToDisplay = () => {
    const { questions, userAns, answered } = props
    let filteredKeys = undefined
    const questionKeys = Object.keys(questions)
    const ansKeys = Object.keys(userAns)
    if (answered) {
      filteredKeys = ansKeys
    } else {
      filteredKeys = questionKeys
        .filter(ques => !ansKeys.includes(ques))
        .concat(ansKeys.filter(ques => !questionKeys.includes(ques)))
    }

    filteredKeys.sort((a,b) => questions[b].timestamp - questions[a].timestamp)

    return (
      <ul>
        {filteredKeys.map((id) => (
          <li key={id}>
            <Question id={id} answered={answered}/>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>
      {questionsToDisplay()}
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users, questions }) => {
  const user = users[loggedInUser]
  const userAns = user.answers
  return {
    userAns,
    questions
  }
}

export default connect(mapStateToProps)(QuestionPage)