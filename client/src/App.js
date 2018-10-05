// importing React, Idea, Home, Login, and importing a route that lets you switch between Home, Login, & ideas
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Idea from './components/Idea';
import Home from './components/Home'
import Login from './components/Login'

// takes you to these specific places when you click on a link
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/users/:userId' component={Idea} />
        </Switch>
      </Router>
    )
  }
}

export default App