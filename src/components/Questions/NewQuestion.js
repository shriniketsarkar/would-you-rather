import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../../actions/shared'

const NewQuestion = (props) => {
  const history = useHistory()
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const handleNewQuestionSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = props
    const question = {
      author: props.loggedInUser,
      optionOneText: optionOne,
      optionTwoText: optionTwo
    }

    dispatch(handleAddQuestion(question))
    history.push('/')
  }

  const handleTextOnChange = (e) => {
    if (e.target.name === 'optionOne') {
      setOptionOne(e.target.value)
    } else if (e.target.name === 'optionTwo') {
      setOptionTwo(e.target.value)
    }
  }

  return (
    <div className='new-question-container'>
      {!props.canAccessPage && <Redirect
        to={{
          pathname: '/login',
          state: { referrer: '/add' }
        }}
      />}
      <div className='new-question-header'>
        <h3>Create New Question</h3>
      </div>
      <div className='new-question-body'>
        <label>Complete the question:</label>
        <h4>Would you rather ...</h4>
        <form onSubmit={handleNewQuestionSubmit}>
          <input
            type='text'
            name='optionOne'
            placeholder='Enter Option One Text Here'
            value={optionOne}
            onChange={handleTextOnChange}
          />
          <div className='new-question-or'>
            <hr />
            <label>OR</label>
            <hr />
          </div>
          <input
            type='text'
            name='optionTwo'
            placeholder='Enter Option Two Text Here'
            value={optionTwo}
            onChange={handleTextOnChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = ({ loggedInUser }) => {
  return {
    loggedInUser,
    canAccessPage: loggedInUser !== null
  }
}

export default connect(mapStateToProps)(NewQuestion)