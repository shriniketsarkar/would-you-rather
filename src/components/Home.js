import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import QuestionPage from './Questions/QuestionPage'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Home = (props) => {

  return (
    <div className='home-container'>
      {
        props.canLogIn
          ? <Login users={props.users} />
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