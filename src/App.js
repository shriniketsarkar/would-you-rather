import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleDataForInitialLoad } from './actions/shared'
import Navigation from './components/Navigation'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'
import './App.css';

const App = (props) => {

  useEffect(() => {
    props.dispatch(handleDataForInitialLoad())
  }, [])

  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navigation />
          <Route path='/' exact component={Home}/>
          <Route path='/new-question' component={NewQuestion}/>
          <Route path='/leader-board' component={LeaderBoard}/>
        </div>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
