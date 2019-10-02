import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header'
import Marvel from './Marvel'
import Footer from './components/Footer'
import Character from './Character'

import './assets/style/geral.scss'

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route path='/' exact component={ Marvel } />
            <Route path='/character/:id' component={ Character } />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </>
    )
  }
}

export default App