import React, { Component } from 'react'
import './App.css'

import Main from './pages/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="main">
          <Main></Main>
        </div>
      </div>
    )
  }
}

export default App