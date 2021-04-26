import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleDataForInitialLoad } from './actions/shared'
import Navigation from './components/Navigation'
import Home from './components/Home'
import NewQuestion from './components/Questions/NewQuestion'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'
import QuestionPoll from './components/Questions/QuestionPoll'
import PollResult from './components/Questions/PollResult'
import NotFoundPage from './components/NotFoundPage'
import Login from './components/Login'
import './App.css';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleDataForInitialLoad())
  }, [])

  return (
    <Router>
      <Fragment>
        <div className="app">
          <Navigation />
          <div className='app-body'>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='/questions/:id' component={QuestionPoll} />
            <Route path='/poll-result/:id' component={PollResult} />
            <Route path='/404' component={NotFoundPage} />
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
