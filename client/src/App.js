import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './components/login'
import Register from'./components/register'
import Dashboard from './components/dashboard'
import News from './components/news'
import Football from './components/football'
import Photos from './components/photos'
import Tasks from './components/tasks'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/news" component={News} />
            <Route exact path="/football" component={Football} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/tasks" component={Tasks} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App