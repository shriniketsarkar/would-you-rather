import React from 'react'
import { connect } from 'react-redux'
import { setLoggedInUser } from '../actions/loggedInUser'
import Login from './Login'
import QuestionPage from './QuestionPage'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Home = (props) => {

  const handleSignIn = (user) => {
    props.dispatch(setLoggedInUser(user))
  }

  return (
    <div className='home-container'>
      {
        props.canLogIn
          ? <Login
            availableUsers={props.users}
            handleSignIn={handleSignIn} />
          :
          <div className='tabs-layout'>
            <Tabs className='tab-container'>
              <TabList>
                <Tab>Unanswered Questions</Tab>
                <Tab>Answered Questions</Tab>
              </TabList>
              <TabPanel className='tab-panel'>
                <QuestionPage answered={false} />
              </TabPanel>
              <TabPanel className='tab-panel'>
                <QuestionPage answered={true} />
              </TabPanel>
            </Tabs>
          </div>
      }
    </div>
  )
}

const mapStateToProps = ({ loggedInUser, users }) => {
  return {
    canLogIn: loggedInUser === null,
    users
  }
}

export default connect(mapStateToProps)(Home)