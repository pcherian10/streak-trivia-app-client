import React, { Component } from 'react';
import QuestionsContainer from './containers/QuestionsContainer'
import RankingsContainer from './containers/RankingsContainer'
import Login from './Login'
import './App.css';


export default class App extends Component {

  render () {
    return (
      <div className="App">
        App Container
        <Login />
      </div>
    )
  }

}

//<QuestionsContainer />
//<RankingsContainer />
