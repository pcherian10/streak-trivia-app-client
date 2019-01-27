import React, { Component } from 'react';
import QuestionsContainer from './QuestionsContainer'
import PlayGame from '../components/PlayGame'
//import RankingsContainer from './RankingsContainer'
import { connect } from 'react-redux'
import { loadGameQuestions} from '../actions/index'

class Dashboard extends Component {


  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }

}


export default Dashboard;
