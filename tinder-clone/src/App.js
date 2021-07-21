import React from 'react'
import "./App.css"
import Header from './Header'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import TinderCard from './Cards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
function App() {
    return (
        <div className="app">
          <Router>
          <Switch>
          <Route path="/chat/:person">
                 <Header backButton="/chat"/>
                 <ChatScreen/>
              </Route>
              <Route path="/chat">
                 <Header backButton="/"/>
                 <Chats/>
              </Route>
              <Route path="/">
                 <Header/>
                <TinderCard/>
                <SwipeButtons/>
              </Route>
          </Switch>
          </Router>
    
        </div>
    )
}

export default App
